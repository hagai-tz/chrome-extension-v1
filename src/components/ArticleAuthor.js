import React, { Component } from 'react';
import { Icon, Slider, Avatar } from 'antd';
import "antd/dist/antd.css";
import './CSS/ArticleAuthor.css'

class ArticleAuthor extends Component {
    render() {
        return (
        <div id='article-author-box'>
            <Avatar shape="square" size={30} icon="user" className='article-author-pic' />
            <div className='article-author-line'>Line skjns aslkalksasaks lakslk lk al slks las l</div>
            <div className='article-author-read-time'>10-20min</div>
        </div> 
                
        );
    }
}

export default ArticleAuthor;