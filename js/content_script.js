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

window.onload = function(){
    UnHookEvent("oncontextmenu");
    UnHookEvent("onselectstart");
    UnHookEventCopy("oncopy");
};
