import React, { Component } from 'react'
import axios from 'axios';
import './style.css'
export default class CategoryImages extends Component {
  constructor() {
    super();
    this.state = {
      image: {}
    }
  }

  componentWillMount() {
    var category = localStorage.getItem('category') || 'Antilope';
    axios.get('http://localhost:8000?category=' + category)
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
            <div className="white-bg " key={index}>
              <img alt={"Owl " + index} src={atob(this.state.image[index].image)} />
            </div>
            {(index + 1 < this.state.image.length) ?
              (<div className="white-bg" key={index + 1}>
                <img alt= {"Owl " + (index +1)} src={atob(this.state.image[index + 1].image)} />
              </div>)
              :
              ('')
            }
            {(index + 2 < this.state.image.length) ?
              (<div className="white-bg" key={index + 2}>
                <img alt= {"Owl " + (index +2)} src={atob(this.state.image[index + 2].image)} />
              </div>)
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
        <h1>{localStorage.getItem('name') || "Antilope Canyon's Beauty"}</h1>
        <div>
          {this.renderImages()}
        </div>
      </div>
    )
  }
}
