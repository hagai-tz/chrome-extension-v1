import { observable, action, computed } from "mobx";
import axios from 'axios'

// const jsdom = require('jsdom')
// const { JSDOM } = jsdom;
// const _ = require('lodash')
// const read = require('moz-readability-node');


export class ProcessedData {

    @observable rawData = []
    @action createWebsiteData = async () => {
        let data = await axios.get(`http://localhost:8000/`)
        this.rawData = data.data
        console.log(data)
        
        }
    }



    //       //RIPPING THE ARTICLE

    //   //gets the HTML from the URL
    //   // let webData = await request('https://www.haaretz.co.il/news/elections/.premium.highlight-1.8440077')
    // //   let webData = await axios.get('https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-how-to-build-a-simple-chrome-extension-in-vanilla-javascript-e52b2994aeeb')
    //   //turn the HTML into DOM document
    //   const dom = window.document//new JSDOM(webData);
    //   console.log(dom)
    //   //use the readability library to parse the DOM document into a JSON free from all the clutter.
    //   const article = new read.Readability(dom).parse()
    //   let fullArticle = _.words(article.textContent)
    //   console.log(article)
