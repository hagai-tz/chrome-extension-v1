import React, { Component } from 'react';
import './CSS/ArticleTitle.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

@inject( "processedData" )

@observer
class ArticleTitle extends Component {
    render() {
        console.log(this.props)
        return (
            <div></div>
            // <h1 id='article-title'>{this.props.processedData.rawData[this.props.processedData.rawData.length-1]}</h1>
        );
    }
}


export default ArticleTitle;