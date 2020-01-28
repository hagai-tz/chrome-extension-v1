import { $mobx } from "mobx"

chrome.runtime.onMessage.addListener(function(res, sender, sendResponse){
    console.log(sender)
  })



  chrome.browserAction.onClicked.addListener(function(tab){
        console.log(tab)
        // let newURL = "http://localhost:3000";
        // chrome.tabs.create({ url: newURL });
        
        // (`http://localhost:8000/url/${newURL}`)
    // chrome.tabs.update(tab.id,{url:"../src/App.js"}); 
    chrome.tabs.update(tab.id,{url:"index.html"}); 

  })
