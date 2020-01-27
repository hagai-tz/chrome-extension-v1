chrome.runtime.onMessage.addListener(function(res, sender, sendResponse){
    console.log(sender)
  })

  chrome.browserAction.onClicked.addListener(function(tab){
        console.log(tab)
        // let newURL = "http://stackoverflow.com/";
        // chrome.tabs.create({ url: newURL });
    chrome.tabs.update(tab.id,{url:"../src/App.js"}); 
    // chrome.tabs.update(tab.id,{url:"index.html"}); 

  })
