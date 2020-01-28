import React, { Component } from 'react';
import './CSS/ArticleContent.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

@inject("processedData")

@observer
class ArticleContent extends Component {

    changeStyle = () => {
        console.log("Hi")
        return `{{color: "red" }}`

    } 

    render() {
        console.log(this.props.processedData.rawData.content)

        let styles = this.props.processedData.difficultyLevelValue        

        return (
            <div id='article-content'>

                {this.props.processedData.rawData.content.map(word => {
                    return (
                        <span className='word-ul'>
                            <span className="word"> {word.word} </span>
                            <span className='translatedWord' difficultyLevel={ word.difficultyLevel } style={{styles}} > {word.translatedWord}</span>
                        </span>
                    )
                  })
                }
            </div>
        );
    }
}

export default ArticleContent;

// style={{display: "none"}}
// style={ (this.props.processedData.difficultyLevel<50 ? { color:"red"} : {display: "none"}) }
// style={ (this.props.processedData.difficultyLevelValue<50 ? { color:"red"} : {display: "none"}) }