var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	// video = document.querySelector("#player1")
	video.autoplay = false;
	video.load();
	// console log: both of autplay and loop are set to false
	video.loop = false;

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		document.querySelector("#volume").innerHTML = // set to the video volume + %
		video.play();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		let vid = document.getElementById("player1")
		vid.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("slow down video");
		video.playbackRate *= ;// slow down 10%
	})

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted == true){
			console.log("muted");
			video.muted = false;
			this.innerHTML = // change to mute
		}
		else{
		if (video.muted == false) {


		}
		}
	})

	document.querySelector("#slider").addEventListener("change", function() {
});










