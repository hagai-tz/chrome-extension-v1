import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { observer } from 'mobx-react'


// @observe r
function App() {
  return (
    <div id='user-interface'>
      <div className='box nav-bar'>Navbar</div>
      <div className='box article-link-box'>Article Link Box</div>
      <div className='box article-tiltle'>Article Title</div>
      
      {/* <div className='box article-author-box'>
          <div className='box article-author-pic'>Pic</div>
          <div className='box article-author-line'>Line</div>
          <div className='box article-author-read-time'>10-20min</div>
      </div> */}
      
      <div className='box article-box'>Article Box</div>
      <div className='box vocabulary-box'>Vocabulary Box</div>
      <div className='box quiz-box'>Quiz Box</div>
      <div className='box statistics-box'>Statistics Box</div>
      
    </div>
  );
}

export default App;
