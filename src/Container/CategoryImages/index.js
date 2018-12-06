import React, { Component } from 'react'
import axios from 'axios';
import './style.css';
import { API_BASE } from '../../Constant';
import FullScreenImage from '../../Component/FullScreenImage';
export default class CategoryImages extends Component {
  constructor() {
    super();
    this.state = {
      image: {},
      showFullScreen : false, 
      imageClicked: ''
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

  handleImageClick = (event) => {
    this.setState({
      showFullScreen : true, 
      imageClicked: event
    })
  }

  renderImages = () => {
    if (this.state.image && this.state.image.length) {
      return this.state.image.map((data, index) => {
        return (index % 3 === 0) ? (
          <div className="parent-div-image" key={index}>
            <div onClick={()=>this.handleImageClick(atob(this.state.image[index].image))} key={index} style={{ width: '30%', margin: 10, padding: 10, background: 'black' }}> <div className="black-bg ">
              <div style={{ background: `url(${atob(this.state.image[index].image)})`, backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', cursor: 'pointer' }}></div>
            </div></div>
            {(index + 1 < this.state.image.length) ?
              (<div onClick={()=>this.handleImageClick(atob(this.state.image[index + 1].image))} key={index + 1} style={{ width: '30%', margin: 10, padding: 10, background: 'black' }}><div className="black-bg">
                <div style={{ background: `url(${atob(this.state.image[index + 1].image)})`, backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', cursor: 'pointer' }}></div>
              </div></div>)
              :
              ('')
            }
            {(index + 2 < this.state.image.length) ?
              (<div onClick={()=>this.handleImageClick(atob(this.state.image[index + 2].image))} key={index + 2}  style={{ width: '30%', margin: 10, padding: 10, background: 'black' }}><div className="black-bg">
                <div style={{ background: `url(${atob(this.state.image[index + 2].image)})`, backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', cursor: 'pointer' }}></div>
              </div></div>)
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
      <div>
        <div className="boxed-layout" style={{ textAlign: 'center' }}>
          <div style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
            Our World is So Beautiful
        </div>
          <h1 style={{ color: 'white' }}>{localStorage.getItem('name') || "Antilope Canyon's Beauty"}</h1>
          <div>
            {this.renderImages()}
          </div>
          </div>
          {
            (this.state.showFullScreen) ? 
            <FullScreenImage image = {this.state.imageClicked} show = {this.state.showFullScreen}/>
            :
            ""
          }
      </div>
    )
  }
}
