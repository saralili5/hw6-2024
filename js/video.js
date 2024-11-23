var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.load();
	console.log("both of autoplay and loop are set to false");
	video.loop = false;

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
		video.play();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		let vid = document.getElementById("player1")
		vid.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("New playback speed:", video.playbackRate.toFixed(2));
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("New playback speed:", video.playbackRate.toFixed(5));
	});

	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
			console.log("Video restarted. Current time:", video.currentTime.toFixed(2));
		} else {
			video.currentTime += 10;
			console.log("Current time after skipping:", video.currentTime.toFixed(2));
		}
	});

// 	document.querySelector("#mute").addEventListener("click", function() {
// 		if (video.muted == true){
// 			console.log("muted");
// 			video.muted = false;
// 			this.innerHTML = // change to mute
// 		}
// 		else{
// 		if (video.muted == false) {


// 		}
// 		}
// 	})

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			this.innerHTML = "Mute";
			console.log("Video unmuted.");
		} else {
			video.muted = true;
			this.innerHTML = "Unmute";
			console.log("Video muted.");
		}
	});

	document.querySelector("#slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = this.value + "%";
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Applied oldSchool class to the video.");
	});
	
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Removed oldSchool class from the video.");
	});

});










