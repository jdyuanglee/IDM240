var audioPlayerObj = document.getElementById('audioplayer');
var bugleObj = document.getElementById('bugle');


var sndPlaying = true;


function audioToggle() {
	if (sndPlaying) {
		audioPlayerObj.pause();
		sndPlaying = false;
	} else {
		audioPlayerObj.play();
		sndPlaying = true;
	}
}
