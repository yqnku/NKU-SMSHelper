/*************************************************************************
    > File Name: js/content_scripts.js
    > Author: yq
    > Mail: xiqian013@live.com 
    > Created Time: 2015-11-3 22:57:15
 ************************************************************************/

'use strict';
function UnHookEvent(onevent) {
	var _event = onevent.substr(2);
	document.addEventListener(_event, function(e) {
		e.stopPropagation();
	}, true);
}

function UnHookEventCopy(onevent) {
	var _event = onevent.substr(2);
	document.getElementsByTagName('body')[0].addEventListener(_event, function(e) {
		e.stopPropagation();
	}, true);
}

function modifyTitle(){
    var array = ['1','2','4'];
    for(var i = 0 ; i < array.length ; i++){
        var div = document.getElementsByClassName('main-left' + array[i]);
        for (var j = 0 ; j < div.length ; j++){
            var li = div[j].getElementsByTagName('li');
            for (var k = 0 ; k < li.length ; k++){
                var a = li[k].getElementsByTagName('a')[0];
                a.text=a.title.substr(0,18);
            }
        }
    }
}
window.onload = function(){
    UnHookEvent("oncontextmenu");
    UnHookEvent("onselectstart");
    UnHookEventCopy("oncopy");
    modifyTitle();
};
