chrome.action.onClicked.addListener(tab =>{
    chrome.scripting.executeScript({
        tarjet:{tabId:tab.id},
        func: () =>{
            alert("Hello from my extension");
        }
    })
})