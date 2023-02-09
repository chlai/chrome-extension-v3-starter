
document.getElementById("btRefresh").addEventListener("click", onClickbtRefresh);
document.getElementById("btAddTabs").addEventListener("click", onClickbtAddTabs);
document.getElementById("btCheckTime").addEventListener("click", onClickbtCheckTime);
function onClickbtRefresh() { 
    // chrome.tabs.query({ currentWindow: true }, function (tabs) { /* blah */
    //     tabs.forEach(tab => {
    //         console.log(tab.id);
    //         chrome.tabs.reload(tab.id);
    //     });
    // });
    alert('hello callback click me');
}

function onClickbtAddTabs() { 
    alert('hello callback Add Tabs');
}

function onClickbtCheckTime() { 
    alert('hello callback Check Time');
}
