import React, { Component } from 'react'
import axios from 'axios';
import './style.css';
import {API_BASE} from '../../Constant';
import { Link } from "react-router-dom";

export default class CategoryImages extends Component {
  constructor() {
    super();
    this.state = {
      image: {}
    }
  }

  componentWillMount() {
    var category = localStorage.getItem('category') || 'Antilope';
    axios.get(API_BASE + 'images?category=' + category)
      .then((response) => {
        this.setState({
          image: response.data
        })
      })
  }

  renderImages = () => {
    if (this.state.image && this.state.image.length) {
      return this.state.image.map((data, index) => {
        return (index % 3 === 0) ? (
          <div className="parent-div-image">
            <Link to = "/contact" style={{width: '30%', margin: 10, padding: 10, background: 'black'}}> <div className="black-bg " key={index}>
              <div style={{background: `url(${atob(this.state.image[index].image)})`, backgroundPosition: 'center center',backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
            </div></Link>
            {(index + 1 < this.state.image.length) ?
              (<Link to = "/contact" style={{width: '30%', margin: 10, padding: 10, background: 'black'}}><div className="black-bg" key={index + 1}>
              <div style={{background: `url(${atob(this.state.image[index+1].image)})`, backgroundPosition: 'center center',backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
              </div></Link>)
              :
              ('')
            }
            {(index + 2 < this.state.image.length) ?
              (<Link to = "/contact" style={{width: '30%', margin: 10, padding: 10, background: 'black'}}><div className="black-bg" key={index + 2}>
              <div style={{background: `url(${atob(this.state.image[index+2].image)})`, backgroundPosition: 'center center',backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>                
              </div></Link>)
              :
              ('')
            }
          </div>
        )
          :
          ('')
      })
    }
  }

  render() {
    return (
      <div className="boxed-layout" style={{ textAlign: 'center' }}>
        <div style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
          Our World is So Beautiful
        </div>
        <h1 style={{color: 'white'}}>{localStorage.getItem('name') || "Antilope Canyon's Beauty"}</h1>
        <div>
          {this.renderImages()}
        </div>
      </div>
    )
  }
}
