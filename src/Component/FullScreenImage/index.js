import React, { Component } from 'react'
import './style.css';
import { Link } from "react-router-dom";

export default class FullScreenImage extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  componentWillUpdate() {
    if (!this.state.show) {
      window.scrollTo(0, 0)
      this.setState({
        show: this.props.show
      })
    }
  }

  componentWillMount(){
    if (!this.state.show) {
      window.scrollTo(0, 0)
      this.setState({
        show: this.props.show
      })
    }
  }
  handleFullScreenClose = () => {
    console.log('Hello')
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div className="fullscreen" style={{ display: ((this.state.show) ? ('block') : ('none')) }}>
        <div style={{ background: '#0000006e', position: 'absolute', width: '100%', height: '100%', top: 0, zIndex: 999 }}>
          <div style={{ width: '100%', height: 'auto', textAlign: 'center' }}>
            <img src={`${this.props.image}`} style={{width:'auto', height: '100vh'}}/>
          </div>
          <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', textAlign: "center" }}>
            <Link to="/contact"><button style={{ padding: 10, background: '#171e12', border: '3px solid white', color: "white" }}>
              Buy This Image
              </button></Link>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0, color: 'white', background: 'black', border: '2px solid white', borderRadius: '100%', padding: '2px 6px', cursor: 'pointer' }} onClick={this.handleFullScreenClose}>
            X
          </div>
        </div>
      </div>
    )
  }
}