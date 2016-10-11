//'use strict'
var feedUrl = "http://www.quicy.cn/rss/nku_math/all.xml";
var req;
var maxFeedItems = 8;

function main() {
    req = new XMLHttpRequest();
    req.onload = handleResponse;
    req.onerror = handleError;
    req.open('GET', feedUrl, true);
    req.send(null);
}

function handleFeedParsingFailed(error) {
    var feed = document.getElementById('feed');
    feed.className = 'error';
    feed.innerText = 'Error: ' + error;
}

function handleError() {
    handleFeedParsingFailed('Failed to fetch RSS feed.');
}

function handleResponse() {
    var doc = req.responseXML;
    if (!doc) {
        handleFeedParsingFailed('Not a valid feed.');
        return;
    }
    buildPreview(doc);
}

function buildPreview(doc) {
    var items = doc.getElementsByTagName('item');
    var html = "";
    for (var i = 0 ; i < maxFeedItems ; i++) {
        var item = items[i];
        if (item !== undefined){
            var title = item.getElementsByTagName('title')[0].textContent;
            var url = item.getElementsByTagName('link')[0].textContent;
            var date = item.getElementsByTagName('date')[0].textContent;
            html += "<li>";
            html += "<a href='" + url + "' target='_blank'>"+title+"---"+date+"</a>";
            html += "</li><hr/>";
        }
    }
    document.getElementById('list').innerHTML = html;
}

window.onload = main;
