import React, { Component } from 'react';
import './CSS/ArticleContent.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

@inject("processedData")

@observer
class ArticleContent extends Component {

    render() {
        console.log(this.props.processedData.rawData[0])
        return (
            <div id='article-content'>

                {this.props.processedData.rawData.map(word => {
                    return (
                        <span className='word-ul'>
                            <span className="word"> {word.word} </span>
                            <span className='translatedWord'> {word.translatedWord}</span>
                        </span>
                    )
                })

            }
            </div>
        );
    }
}

export default ArticleContent;