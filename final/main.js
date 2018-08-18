// Audio Playing & Wave animation
var audioPlayerObj = document.getElementById('audioplayer');
var bugleObj = document.getElementById('bugle');

var sndPlaying = false;

var mic = document.getElementById('mic');
var micInside = document.getElementById('micInside');
var micOutside = document.getElementById('micOutside');

function audioToggle() {
	if (sndPlaying == true) {
		audioPlayerObj.pause();
		sndPlaying = false;
		micInside.style.display = "none";
		micOutside.style.display = "none";
	} else {
		console.log('playing');
		audioPlayerObj.play();
		sndPlaying = true;
		micInside.style.display = "inline";
		micOutside.style.display = "inline";
	}
}

// Button hovered animations
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');

button1.addEventListener('mouseenter', animation1);
button1.addEventListener('mouseout', noanimation1);
button2.addEventListener('mouseenter', animation2);
button2.addEventListener('mouseout', noanimation2);
button3.addEventListener('mouseenter', animation3);
button3.addEventListener('mouseout', noanimation3);
button4.addEventListener('mouseenter', animation4);
button4.addEventListener('mouseout', noanimation4);


function animation1(){
	cinema.classList.add('ishovered1');
}
function noanimation1(){
	cinema.classList.remove('ishovered1');
}
function animation2(){
	concert.classList.add('ishovered2');
}
function noanimation2(){
	concert.classList.remove('ishovered2');
}
function animation3(){
	devices.classList.add('ishovered3');
}
function noanimation3(){
	devices.classList.remove('ishovered3');
}
function animation4(){
	compass.classList.add('ishovered4');
	compass.classList.remove('ishovered5');
}
function noanimation4(){
	compass.classList.remove('ishovered4');
	compass.classList.add('ishovered5');
}

// Night shift
var day = document.getElementById('day');
var night = document.getElementById	('night');
var header = document.querySelector('header');

var isday = true;

function nightshift(){
	if (isday == true){
		isday = false;
		night.style.visibility = "visible";
		day.style.visibility = "hidden";
		header.style.backgroundImage = "url('assets/6.jpg')";
	}
	else{
		isday = true;
		night.style.visibility = "hidden";
		day.style.visibility = "visible";
		header.style.backgroundImage = "url('assets/7.jpg')";
	}
}