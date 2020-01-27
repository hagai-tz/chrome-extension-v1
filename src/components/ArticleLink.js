import React, { Component } from 'react';
import './CSS/ArticleLink.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

@inject("processedData")

@observer
class ArticleLink extends Component {
    render() {
        return (
            <h4 id='article-link-box'>https://www.ycombinator.com/ask-yc-best-friends-cofounders/</h4>
        );
    }
}

export default ArticleLink;

