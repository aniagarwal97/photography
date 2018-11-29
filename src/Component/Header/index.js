import React, { Component } from 'react'
import './style.css';
import { Link } from "react-router-dom";
export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            isActiveHome: true,
            isActiveShop: false,
            isActiveContact: false,
            isActiveProfile: false
        }
    }
    componentDidMount(){
        if (this.props.location.pathname === '/') {
            this.setState({
                isActiveHome: true,
                isActiveShop: false,
                isActiveContact: false,
                isActiveProfile: false
            })
        }
        else if (this.props.location.pathname === '/shop' || this.props.location.pathname === '/category-images') {
            this.setState({
                isActiveHome: false,
                isActiveShop: true,
                isActiveContact: false,
                isActiveProfile: false
            })
        }
        else if (this.props.location.pathname === '/contact') {
            this.setState({
                isActiveHome: false,
                isActiveShop: false,
                isActiveContact: true,
                isActiveProfile: false
            })
        }
        else if(this.props.location.pathname === '/profile'){
            this.setState({
                isActiveHome: false,
                isActiveShop: false,
                isActiveContact: false,
                isActiveProfile: true
            })
        }
    }

    componentDidUpdate(){
        if (this.props.location.pathname === '/' && this.state.isActiveHome === false) {
            this.setState({
                isActiveHome: true,
                isActiveShop: false,
                isActiveContact: false,
                isActiveProfile: false
            })
        }
        else if ((this.props.location.pathname === '/shop' || this.props.location.pathname === '/category-images') && this.state.isActiveShop === false) {
            this.setState({
                isActiveHome: false,
                isActiveShop: true,
                isActiveContact: false,
                isActiveProfile: false
            })
        }
        else if (this.props.location.pathname === '/contact' && this.state.isActiveContact === false) {
            this.setState({
                isActiveHome: false,
                isActiveShop: false,
                isActiveContact: true,
                isActiveProfile: false
            })
        }
        else if(this.props.location.pathname === '/profile' && this.state.isActiveProfile === false){
            this.setState({
                isActiveHome: false,
                isActiveShop: false,
                isActiveContact: false,
                isActiveProfile: true
            })
        }
    }
    render() {
        return (
            <div>
                <header className="header black-bg">
                    <div className="logo">
                    <Link to="/" ><img alt="Logo" src={require("../../logo.png")} style={{ width: 135 }} /></Link>
                    </div>
                    <div className="navbar">
                        <ul className="menu">
                            <li className={(this.state.isActiveHome) ? "active" : ""} ><Link to="/" >Home</Link></li>
                            <li className={(this.state.isActiveProfile) ? "active" : ""}><Link to="profile">Profile</Link></li>
                            <li className={(this.state.isActiveShop) ? "active" : ""}><Link to="shop">Shop</Link></li>
                            <li className={(this.state.isActiveContact) ? "active" : ""}><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}
