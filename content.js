// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      const isDesignModeOn = document.designMode === "on";
      if (isDesignModeOn) {
        document.designMode = "off";
        chrome.browserAction.setIcon({path: "icon-no-edit.png"});
      } else {
        document.designMode = "on";
        chrome.browserAction.setIcon({path: "icon-edit.png"});
      }
    }
  }
);