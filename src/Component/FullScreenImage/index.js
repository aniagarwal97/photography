import React, { Component } from 'react'
import './style.css'
export default class FullScreenImage extends Component {

  constructor(){
    super();
    this.state = {
      show : false
    }
  }

  componentWillReceiveProps(){
    this.setState({
      show : this.props.show
    })
    window.scrollTo(0, 0)
  }

  onCancelClick = () => {
    this.setState({
      show: false
    })
  }
   render() {
    return (
      <div className="fullscreen">
        <div style={{ background: '#0000006e', position: 'absolute', width: '100%', height: '100%', top: 0, zIndex: 999, display: this.state.show }}>
          <div style={{ width: '100%', height: 'auto', textAlign: 'center' }}>
            <img src={`${this.props.image}`} />
            <div style={{ position: 'absolute', left: 0, top: 0, width: '100%' }}>
              <button style={{padding: 10, background: 'cadetblue', border: '3px solid indianred'}}>
              Buy This Image
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}