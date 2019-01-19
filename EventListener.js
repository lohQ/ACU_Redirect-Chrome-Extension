
chrome.commands.onCommand.addListener(function(command) {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

		if (command === "toggle_play-pause"){
			chrome.tabs.executeScript({
				file: "Toggle_Play-Pause.js"					
			});
		}else if (command === "start_acu-redirect"){
			chrome.tabs.executeScript({
				file: "Acu_Redirect.js"
			});
		}
		
	});
	
});



//errors encountered

//document focus on extension, cant getElementByName
//solution: injection

//Ctrl+Space triggered Acu_Redirect.js (browserAction) instead of Toggle_Play-Pause.js (commands)
//solution: add another shortcut key for browserAction
