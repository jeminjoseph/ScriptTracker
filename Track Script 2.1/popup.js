chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
  });
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);



    var content=document.getElementById("result")
  
    
    for (var i=0;i<message.data.length;i++){
        content.appendChild($('<div class="result_item">'+message.data[i]+'</div>')[0]);
    }
    if(message.data.length==0){
      
      var noScriptmsg = "No Scripts Found!";
      
      content.appendChild($('<div class="result_item">'+noScriptmsg+'</div>')[0]);

    
    }
    
});