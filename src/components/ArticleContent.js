import React, { Component } from 'react';
import './CSS/ArticleContent.css'
import { Skeleton } from 'antd';


import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

@inject("processedData")

@observer
class ArticleContent extends Component {
    
    render() {
        console.log("I'm content", this.props.processedData.rawData.content)


        return (
            
            <div id='article-content'>
                {this.props.processedData.rawData.content.map(word => {
                        return (
                            <span className='word-ul'>
                                <span className="word"> {word.word} </span>
                                <span className='translatedWord' difficultyLevel={ word.difficultyLevel } style={ (100-this.props.processedData.difficultyLevelValue<word.difficultyLevel ? null: { visibility: "hidden", transition:"visibility 1s"} )}> {word.translatedWord}</span>
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
// {/* <span className='translatedWord' difficultyLevel={ word.difficultyLevel } style={ (this.props.processedData.difficultyLevelValue<word.difficultyLevel ? null: {transition: "display 2s", display: "none" }) } > {word.translatedWord}</span> */ }








//
// import React, { Component } from 'react';
// import './CSS/ArticleContent.css'
// import { Skeleton } from 'antd';


// import { observer, action, inject } from 'mobx-react'
// import ArticleRawData from '../stores/ArticleRawData'

// @inject("processedData")

// @observer
// class ArticleContent extends Component {
    
//     render() {
//         console.log(this.props.processedData.rawData.content)


//         return (

//             <div id='article-content'>
//                 {this.props.processedData.rawData.content.map(word => {
//                         return (
//                             <span className='word-ul'>
//                                 <span className="word"> {word.word} </span>
//                                 <span className='translatedWord' difficultyLevel={ word.difficultyLevel } style={ (this.props.processedData.difficultyLevelValue>word.difficultyLevel ? null: { visibility: "hidden", transition:"visibility 1s"} )}> {word.translatedWord}</span>
//                             </span>
//                         )
//                     })
//                 }
                
//             </div>
//         );
//     }
// }

// export default ArticleContent;

