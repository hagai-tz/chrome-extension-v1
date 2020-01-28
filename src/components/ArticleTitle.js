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
            <h1 id='article-title'>{this.props.processedData.rawData.title}</h1>
        );
    }
}


export default ArticleTitle;