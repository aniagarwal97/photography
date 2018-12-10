import React, { Component } from 'react'
import './style.css'
export default class Footer extends Component {
	render() {
		return (
			<footer className="footer black-bg">
				<div className="logo">
					<img alt="Logo" src={require("../../logo.png")} style={{ width: 135 }} />
				</div>
				<div className="social-icons">
					<ul>
						<li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
						<li><a href="https://www.linkedin.com/in/meeli-sonn-30246b50/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li><a href="https://meeli-sonn.pixels.com/index.html?utm_source=GooglePlus"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</footer>
		)
	}
}