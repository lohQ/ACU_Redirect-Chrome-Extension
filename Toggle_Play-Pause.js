
var tab_url = document.URL;

if (tab_url.includes("ntume")){
	
	var tab_vid = document.getElementsByTagName("video");
	
	if (tab_vid[0] != null){
	
		if (tab_vid[0].paused){
			tab_vid[0].play();
		}else{
			tab_vid[0].pause();
		}
	
	}else{
		alert("video not found");
	}

}