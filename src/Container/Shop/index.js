import React, { Component } from 'react';
import Image from '../../Component/Image';

export default class Shop extends Component {
	render() {
		return (
			<div className="profile boxed-layout">
				<div style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
					Our World is So Beautiful
                </div>
				<div style={{ display: 'flex' }}>
					<Image source={require('../../antilope.jpg')} name="Antilope Canyon's Beauty" category="Antilope" route={this.props} />
					<Image source={require('../../owl.jpg')} name="Owl's Beauty" category="Owl" route={this.props} />
				</div>
				<div style={{ display: 'flex' }}>
					<Image source={require('../../hummingbird.jpg')} name="Hummingbird's Beauty" category="Hummingbird" route={this.props} />
					<Image source={require('../../bryce.jpg')} name="Bryce Canyon's Beauty" category="Bryce" route={this.props} />
				</div>
			</div>
		)
	}
}