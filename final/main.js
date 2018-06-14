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
	devices.classList.add('ishovered4');
}
function noanimation4(){
	devices.classList.remove('ishovered4');
}