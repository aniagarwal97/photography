import React, { Component } from 'react'
import './style.css'
export default class Footer extends Component {
	render() {
		return (
			<footer className="footer white-bg">
				<div className="logo">
					<img alt="Logo" src={require("../../logo.png")} style={{ width: 55 }} />
				</div>
				<div className="social-icons">
					<ul>
						<li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</footer>
		)
	}
}