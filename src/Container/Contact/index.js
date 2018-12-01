import React, { Component } from 'react'
import './style.css';
import axios from 'axios';
import {API_BASE} from '../../Constant';
export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            isFilled: false
        }
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubject = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    handleDescription = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${API_BASE}/contact?name=${this.state.name}&email=${this.state.email}&subject=${this.state.subject}&message=${this.state.message}`)
            .then((response) => {
                this.setState({
                    isFilled: true
                })
            })
    }
    render() {
        return (
            <div className="black-bg boxed-layout">
                <div className="contact-heading">
                    <h1>Our World is So Beautiful - Contact Us</h1>
                </div>
                <div className="contact">
                    <iframe title="Contact Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.7262717251288!2d-115.20520368472498!3d36.27042398006112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8ebc50df4968f%3A0xf83a375f6486a8e7!2s6041+Towboat+St%2C+North+Las+Vegas%2C+NV+89031%2C+USA!5e0!3m2!1sen!2sin!4v1543257055645" width="600" height="450" style={{ border: 0, frameborder: 0, width: '50%' }} allowFullScreen={true}></iframe>
                    <div className="contact-form" style={{ width: '50%' }}>
                        {
                            (!this.state.isFilled)
                                ?
                                <form>
                                    <input className="input-name" placeholder="Enter your Name" onChange={this.handleName} /><br />
                                    <input className="input-email" placeholder="Enter your Email Id" type="email" onChange={this.handleEmail} /><br />
                                    <input className="input-subject" placeholder="Subject" onChange={this.handleSubject} /><br />
                                    <textarea className="input-message" placeholder="Description" onChange={this.handleDescription} /><br />
                                    <button className="form-submit" onClick={this.handleSubmit}>Submit</button>
                                </form>
                                :
                                <div style={{ textAlign: 'center' }}>
                                    <h1>Thank You!</h1>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}