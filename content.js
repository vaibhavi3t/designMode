// content.js
chrome.runtime.onMessage.addListener(iconClickedHandler);

function iconClickedHandler(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    const isDesignModeOn = document.designMode === "on";
    if (isDesignModeOn) {
      document.designMode = "off";
    } else {
      document.designMode = "on";
    }
    console.log("Design Mode " + document.designMode);
  }
}