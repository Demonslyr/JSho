var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 1020;
canvas.height = 960/*Change this to ->window.innerHeight;<- and modify the menu seciton to fit around it*/
document.body.appendChild(canvas);
// Background image
//var bgReady = false;
//explore the image loader option
//////change the map images into an aray of map images so I can have alot or a little and it'll cycle

///////////////////////////////////////////////////////////
//Load the pieces of the map
///////////////////////////////////////////////////////////

var level1 = new Image();
level1.src = "art/map1.png";
var level2 = new Image();
level2.src = "art/map2.png";
var level3 = new Image();
level3.src = "art/map3.png";
var level4 = new Image();
level4.src = "art/map4.png";

///////////////////////////////////////////////////////////
//Load the ship art
///////////////////////////////////////////////////////////

var pShip = new Image();
pShip.src = "art/player_ship.png";
var eShip = new Image();
eShip.src = "art/enemy_ship.png";
var mb_Ship_0 = new Image();
mb_Ship_0.src = "art/enemy_ship_mb0.png";
///////////////////////////////////////////////////////////
//Load the projectile art
///////////////////////////////////////////////////////////

var fShot = new Image();
fShot.src = "art/projectile.png";
var PUp_proj = new Image();
PUp_proj.src = "art/P_Up_Proj.png";
var EShot_0 = new Image();
EShot_0.src = "art/Eprojectile.png";
var EShot_1 = new Image();
EShot_1.src = "art/Eprojectile_2.png";

///////////////////////////////////////////////////////////
//Load animation assets
///////////////////////////////////////////////////////////

var shield_dmg = new Image();
shield_dmg.src = "art/shield_dmg_1.png";

///////////////////////////////////////////////////////////
//Load the credit images
///////////////////////////////////////////////////////////

var emblem = new Image();
emblem.src = "art/credit images/BF4 Emblem.png";
var kShip = new Image();
kShip.src = "art/credit images/kamina_ship.png";
var mTad = new Image();
mTad.src = "art/credit images/mTad.png";
var GLB = new Image();
GLB.src = "art/credit images/GLB.png";
var ToberWIN = new Image();
ToberWIN.src = "art/credit images/Tober.png";
////
var game_tunes =document.getElementById('gameplay_music');
var menu_tunes =document.getElementById('main_menu');
var credit_tunes =document.getElementById('credits');
//console.log("Game ",game_tunes.duration*1000);
//console.log("Menu ",menu_tunes.duration*1000);
//console.log("Credits ",credit_tunes.duration*1000);
var boss=0;
var posx = 0;
var posy = 0 ;
var mouse = {x: 0, y: 0};
var down = false
var bcounter = 0;
var Ecounter = 0;
var pupCounter = 0;
var Tcounter =0;
var TSpawn =0;
var shieldT =0;
var blimit = 0;
var shield_tick =0;
wait=0;
var main_menu = true;
var credits = false;
var paused = false;
var Eblimit =0;
var health= 100;
var shield=50;
var score=0;
var eFreq =120;

var channel_max = 30;// number of channels



////////n rotating channel audio handler provided by http://www.storiesinflight.com/html5/audio.html
/*
AUDIO ID LIST
"gameplay_music"
"main_menu"
"laser"
"credits"
"explosion"
"hp_damaged"
"shield_damaged"


VOLUME EXAMPLE
myVid=document.getElementById("video1");
myVid.volume=0.2;
myVid.volume=0.2;

some code for interrupting the audio on a channel and playing new audio instead
maybe good for menu switching

function playSong(newSong){         
    alert(newSong);
    if (newSong != ""){
        if(currSong != "" ) {
            document.getElementById(currSong).pause();
        }           
        var newSongEl = document.getElementById(newSong);
        newSongEl.currentTime = 0;
        newSongEl.play();
        currSong = newSong;
    }
}

*/
	///////Example of below code being called
	//////play_multi_sound('multiaudio1');
	
	
	
	//////NOTE: play with this code and make sure that each kind of audio gets it's own reserves of sound
	

////below is a hack to make multiple audio channel arrays while I find a way to combine this avtion with the 2D array generator from before
									
	expchannels = new Array();
	for (a=0;a<channel_max;a++) {									// prepare the channels
		expchannels[a] = new Array();
		expchannels[a]['channel'] = new Audio();						// create a new audio object
		expchannels[a]['finished'] = -1;							// expected end time for this channel
	}

	shotchannels = new Array();
	for (a=0;a<channel_max;a++) {									// prepare the channels
		shotchannels[a] = new Array();
		shotchannels[a]['channel'] = new Audio();						// create a new audio object
		shotchannels[a]['finished'] = -1;							// expected end time for this channel
	}
	
	
		dmgchannels = new Array();
	for (a=0;a<channel_max;a++) {									// prepare the channels
		dmgchannels[a] = new Array();
		dmgchannels[a]['channel'] = new Audio();						// create a new audio object
		dmgchannels[a]['finished'] = -1;							// expected end time for this channel
	}

	
	function play_multi_sound_dmg(s) {
		for (a=0;a<dmgchannels.length;a++) {
			thistime = new Date();
			if (dmgchannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
				dmgchannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
				dmgchannels[a]['channel'].src = document.getElementById(s).src;
				dmgchannels[a]['channel'].load();
				if(s="shield_damaged"){
				dmgchannels[a]['channel'].volume=0.2;}
				dmgchannels[a]['channel'].play();
				break;
			}
		}
	}
	

	function play_multi_sound_exp(s) {
		for (a=0;a<expchannels.length;a++) {
			thistime = new Date();
			if (expchannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
				expchannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
				expchannels[a]['channel'].src = document.getElementById(s).src;
				expchannels[a]['channel'].load();
				expchannels[a]['channel'].volume=0.5;
				expchannels[a]['channel'].play();
				break;
			}
		}
	}
	
	
	function play_multi_sound_shot(s) {
		for (a=0;a<shotchannels.length;a++) {
			thistime = new Date();
			if (shotchannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
				shotchannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
				shotchannels[a]['channel'].src = document.getElementById(s).src;
				shotchannels[a]['channel'].load();
				shotchannels[a]['channel'].volume=0.2;
				shotchannels[a]['channel'].play();
				break;
			}
		}
	}
	
	
function play_single_sound() {
		game_tunes.play();
	}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

document.addEventListener('mousemove', function(e){ 

    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top; 
	//if(paused){menu.update();}
}, false);

document.addEventListener('mousedown', function(e){ 
down=true;
}, false);
document.addEventListener('mouseup', function(e){ 
down=false;
}, false);

document.addEventListener('keydown', function(e){ 
if (e.which ==27/*escape*/){
if(credits){	credits=false;
	initialized = false;
	credit_tunes.pause();
	menu_tunes.currentTime = 0;
	menu_tunes.play();}
else if(!paused&&Game.running&&player.alive==true){paused = true;
game_tunes.pause();}
else if(paused&&Game.running&&player.alive==true){paused = false;
game_tunes.play();}
}

else if(e.which ==13/*enter*/){if(credits){	credits=false;
	credit_tunes.pause();
	menu_tunes.currentTime = 0;
	menu_tunes.play();}}
	
//else if(e.which ==37/*left arrow*/){}
//else if(e.which ==38/*up arrow*/){}
//else if(e.which ==39/*right arrow*/){}
//else if(e.which ==40/*down arrow*/){}
}, false);



(function() {
	var onFrame;
	if (window.webkitRequestAminationFrame) {
		onFrame = function(callback) {
			var _cb = function() { callback(); webkitRequestAminationFrame(_callback); }
			_callback();
		};
	} else {
		onFrame = function(callback) {
			setInterval(callback,1000/Game.fps);
		}
	}

	window.onFrame = onFrame;
})();



// Start the game loop
//turn this into a menu loop
//it IS a menu loop now. game is controlled through the menu object
menu.initialize();
//Game.initialize();
//window.onFrame(Game.run);
window.onFrame(menu.start);
