import React, { Component } from 'react'
import './style.css'
export default class Image extends Component {

    handleCategoryClick = (category) => {
        localStorage.setItem('category', category)
        localStorage.setItem('name', this.props.name)
        this.props.route.history.push('/category-images')
    }
    render() {
        return (
            <div className="black-bg image-container" onClick={() => { this.handleCategoryClick(this.props.category) }}>
                <img className="image-class" alt={this.props.name} src={this.props.source} />
                <div className="caption">
                    <p style={{ margin: 0, padding: 10 }}>{this.props.name}</p>
                </div>
                <div>
                </div>
            </div>
        )
    }
}
