

// function downloadListener(downloadItem) {
//     var downloadUrl = downloadItem.url;
//     console.log(downloadUrl);
//     var canceling = browser.downloads.cancel(downloadItem.id)
//     console.log(canceling);
// }

function processURL(requestDetails) {
    var url = requestDetails.url;
    console.log("intercepted: " + url);
    return {cancel: true};
}
  
browser.webRequest.onBeforeRequest.addListener(
    processURL,
    {
        urls: [
            "http://*/*.torrent",
            "https://*/*.torrent",
            "file://*/*.torrent",
            "ftp://*/*.torrent"
        ]
    },
    [
        "blocking"
    ]
);

console.log("WebUI add-on loaded");