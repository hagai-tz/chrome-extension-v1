import React, { Component } from 'react';
import { Icon, Slider, Avatar } from 'antd';
import "antd/dist/antd.css";
import './CSS/ArticleAuthor.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'


@inject("processedData")

@observer
class ArticleAuthor extends Component {
    render() {
        return (
        <div id='article-author-box'>
            {/* <Avatar shape="square" size={30} icon="user" className='article-author-pic' /> */}
            <div className='article-author-line'>Article by: {this.props.processedData.rawData.author}</div>
            <div className='article-author-read-time'>Reading time: {this.props.processedData.rawData.readingTime} minutes</div>
        </div> 
                
        );
    }
}

export default ArticleAuthor;