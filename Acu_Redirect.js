//made by Loh Qiao Yan

var run = document.URL.includes("aculearn");

//get the video by id
var vid = document.getElementById("Video1_html5_api");

if (run){
	if (vid == null){
		alert("Failed to find video by ID 'Video1_html5_api'");
	}else{
	
		//redirect to the source
		location.assign(vid.src);
	}
}
