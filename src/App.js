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
import GetURL from './components/GetURL'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from './stores/ArticleRawData'
import axios from 'axios';

@inject( "processedData" )

@observer
class App extends Component {

       componentDidMount () {
        this.props.processedData.createWebsiteData()
        console.log(this.props)
        // console.log(this.props.location.query.url)
        // let newData = await axios.get(`http://localhost:3000/url`)
        // this.props.processedData.addRawDataToAppStore(newData.data)
        // console.log(this.props)
           
      }
    
      
    render ()
      {
        console.log(this.props.location)

  return (
   
    <Router>
        <div id='user-interface'>
          <Nav/>
          <ArticleLink/>
          <ArticleTitle />
          <ArticleAuthor/>
          <ArticleContent />
          <Route path='/url' exact render={({match}) => <GetURL match={match} /> } />
          {/* <VocabularyBox/> */}


        </div>
        
    </Router>
  );
  }
}

export default App;