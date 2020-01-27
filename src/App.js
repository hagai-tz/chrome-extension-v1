import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

//Components
import Nav from './components/Nav';
import ArticleTitle from './components/ArticleTitle';
import VocabularyBox from './components/VocabularyBox';
import ArticleContent from './components/ArticleContent';
import ArticleLink from './components/ArticleLink'
import ArticleAuthor from './components/ArticleAuthor'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from './stores/ArticleRawData'

@inject( "processedData" )

@observer
class App extends Component {

       componentDidMount (){
        this.props.processedData.createWebsiteData()
       
        // let newData = await axios.get(`http://localhost:8000/`)
        // this.props.processedData.addRawDataToAppStore(newData.data)
        // console.log(this.props)
           
      }
      
    render ()
      {
        console.log(this.props)

  return (
   
    <div id='user-interface'>
      <Nav/>
      <ArticleLink/>
      <ArticleTitle />
      <ArticleAuthor/>
      <ArticleContent />
      {/* <VocabularyBox/> */}

    </div>
    
  );
  }
}

export default App;