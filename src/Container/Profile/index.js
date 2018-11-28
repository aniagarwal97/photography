import React, { Component } from 'react'
import './style.css';

export default class Profile extends Component {
    render() {
        return (
            <div className="white-bg boxed-layout profile">
                {/* <div style={{ display: 'flex' }}> */}
                <div style={{ textAlign: 'center' }}>
                    <img src={require('../../profile.jpg')} alt="Meeli Loite Sonn" style={{ border: '5px solid black' }} />
                </div>
                <div className="about">
                    <h1 style={{marginBottom: 0}}>Meeli Loite Sonn</h1>
                    <span><strong>(Photographer)</strong></span>
                    <h3>Hello, and welcome to OUR WORLD IS SO BEAUTIFUL Website!</h3>
                    <p>My name is Meeli Loite Sonn; I am of Estonian heritage.  Presently, I reside in Las Vegas, Nevada, USA.</p>
                    <p>I have been a professional photographer for over 35 years.  Many of my photographs have been showcased on numerous Internet sites – a number of my photographs have even won peer/viewer awards.  As of 2017, I have expanded my scope a bit, by showcasing my photography projects on my own Website.</p>
                    <p>My favorite subjects to photograph are smaller animals, birds, insects, flowers, and the like, as well as nature itself, mountains, canyons, and so on.</p>
                    <p>I use a Nikon D3200 camera for my work; preferring an AF Micro NIKKOR 60mm f/2.8Dlens for extreme close-up/macro shooting as well as general photography.  I also use Adobe Photoshop/Adobe Lightroom to enhance and edit my imagery.  I own all of the copyrights to my own photography work; the prints I sell to you.</p>

                    <p>Don’t see exactly what you’d like in my gallery?  Feel free to contact me to discuss a commission-based project for you.</p>
                    <p>Thank you for your interest – Aitäh Teie huvi eest, as they say in Estonian……</p>
                </div>
            </div>
        )
    }
}
