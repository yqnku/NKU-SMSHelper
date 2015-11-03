/*************************************************************************
    > File Name: js/content_scripts.js
    > Author: yq
    > Mail: xiqian013@live.com 
    > Created Time: 2015-11-3 22:57:15
 ************************************************************************/

'use strict';
function UnHookEvent(onevent) 
{
	var _event = onevent.substr(2);
	document.addEventListener(_event, function(e) {
		e.stopPropagation();
	}, true);
}
function UnHookEventCopy(onevent) 
{
	var _event = onevent.substr(2);
	document.getElementsByTagName('body')[0].addEventListener(_event, function(e) {
		e.stopPropagation();
	}, true);
}
function Patch()
{
    UnHookEvent("oncontextmenu");
    UnHookEvent("onselectstart");
    UnHookEventCopy("oncopy");
}
window.onload = Patch;
