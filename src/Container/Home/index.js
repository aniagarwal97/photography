import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel2';
import './owl.carousel.css';
import './style.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        <div key={1} className="item"><img src={require("../../slide1.jpg")} alt="Slide-1" /></div>,
        <div key={2} className="item"><img src={require("../../slide5.jpg")} alt="Slide-2" /></div>,
        <div key={3} className="item"><img src={require("../../slide8.jpg")} alt="Slide-3" /></div>,
      ],

      itemNo: 1,
      loop: false,
      nav: false,
      rewind: true,
      autoplay: true
    };
  }

  createSliderNavigation = () => {
    return this.state.items.map((item, index) => {
      return (
        <div key = {index} className="re-owl-dot" onClick={() => this.refs.car.goTo(index)}>
          {index + 1}
        </div>
      )
    })
  }

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      nav: this.state.nav,
      rewind: this.state.rewind,
      autoplay: this.state.autoplay
    };
    // #181f12
    return (
      <div className="home boxed-layout" >
      <div style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
      Our World is So Beautiful
      </div>
      <div>
        <img style={{width: '100%'}} src="https://1stwebdesigner.com/wp-content/uploads/2016/01/slideme-jQuery-slider.jpg"></img>
      </div>
        <div >
          <OwlCarousel
            ref="car"
            options={options}
          >
            {this.state.items}
          </OwlCarousel>
          <div className="re-owl-controls">
            <div className="re-owl-nav">
              <div className="re-owl-prev" onClick={() => this.refs.car.prev()}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </div>

              {this.createSliderNavigation()}
              <div className="re-owl-next" onClick={() => this.refs.car.next()}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
            {/* <button onClick={() => this.refs.car.prev()}>
					prev
				</button>

				<button onClick={() => this.refs.car.next()}>
					next
				</button> */}

            {/* <button onClick={() => this.refs.car.goTo(0)}>
            goTo
				</button> */}
          </div>
        </div>
      </div>
    )
  }
}