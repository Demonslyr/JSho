var menu = {}
var initialized;
var reset=false;
var wait=0;
var i=2400;
var z=0;
var q=2400;
menu.initialize = function(){
initialized=false;
main_menu=true;
credits=false;
paused = false;
Game.initialize();
}
menu.gamestart = function(){}


menu.start = function(){
	if(!initialized){
		Game.initialize();
		initialized=true;
		}
	//this is the main menu
	//new game, exit, credits
	//console.log(paused);
	/////////////there will be a condition around this game start and so long as its conditionals aren't met it will stay in the main menu
	if(!main_menu){
		//main_menu=false;
		Game.running = true;
		//Game.initialize();
		Game.run();
		}
	else{
		menu.update();
		}
	/*
	other conditionals down here to quit and view the credits
	*/

}
menu.update = function(){
	  var x = mouse.x;
	  var y = mouse.y;
	if(paused&&!main_menu){
		if(!player.alive){
			menu.death(x,y);
			}
		else{
			context.beginPath();
			context.globalAlpha = 0.7;
			context.fillStyle = "black";
			context.rect(0,0,canvas.width,canvas.height);
			context.fill();
			context.beginPath();
			context.globalAlpha = 0.3;
			context.fillStyle = "white";
			context.rect((canvas.width/2)-200,(canvas.height/2)-205,400,100);
			context.fill();
			context.beginPath();
			context.rect((canvas.width/2)-100,(canvas.height/2)-100,200,100);
			context.fill();
			context.fillStyle = "black";
			context.globalAlpha = 1;
			text.pause();
			if (x<610&&x>410&&y<425&y>375){
				context.beginPath();
				context.globalAlpha = 0.2;
				context.fillStyle = "red";
				context.rect((canvas.width/2)-100,(canvas.height/2)-100,200,50);
				context.fill();
				context.globalAlpha = 1;
				}
			else if (x<610&&x>410&&y<475&y>425){
				context.beginPath();
				context.globalAlpha = 0.2;
				context.fillStyle = "red";
				context.rect((canvas.width/2)-100,(canvas.height/2)-50,200,50);
				context.fill();
				context.globalAlpha = 1;
				}
			if(paused&&x<610&&x>410&&y<425&y>375&&down){
				paused = false;
				
				game_tunes.play();
				}
			if(paused&&x<610&&x>410&&y<475&y>425&&down){ 
				paused = true;
				main_menu=true;
				initialized=false;
				score=0;
				game_tunes.currentTime = 0;
				menu_tunes.currentTime = 0;
				menu.reset=true;
				wait=0;
				menu.start();
				}
			}
			
		}
	else if((main_menu&&!paused)||this.reset){
		////////PROBLEM CODE IN HERE///////////////
		paused=false;
		mainmenu=true;
		////add code here to restart the music
		////
		
		////////////////////
		if(!credits){
			menu.map();		
			if(menu_tunes.currentTime*1000>240000){
				menu_tunes.pause();
				menu_tunes.currentTime = 0;
				menu_tunes.play();
				}
			context.beginPath();
			context.globalAlpha = 0.7;
			context.fillStyle = "black";
			context.rect(0,0,canvas.width,canvas.height);
			context.fill();
			context.beginPath();
			context.globalAlpha = 0.3;
			context.fillStyle = "white";
			context.rect((canvas.width/2)-200,(canvas.height/2)-205,400,100);
			context.fill();
			context.beginPath();
			context.rect((canvas.width/2)-100,(canvas.height/2)-100,200,150);
			context.fill();
			context.fillStyle = "black";
			context.globalAlpha = 1;
			if(wait<300){wait++;}
			//console.log("I passed wait", wait);
			text.main_menu();
			if (x<610&&x>410&&y<425&y>375){
				context.beginPath();
				context.globalAlpha = 0.2;
				context.fillStyle = "red";
				context.rect((canvas.width/2)-100,(canvas.height/2)-100,200,50);
				context.fill();
				context.globalAlpha = 1;
				}
			else if (x<610&&x>410&&y<475&y>425){
				context.beginPath();
				context.globalAlpha = 0.2;
				context.fillStyle = "red";
				context.rect((canvas.width/2)-100,(canvas.height/2)-50,200,50);
				context.fill();
				context.globalAlpha = 1;
				}
			else if (x<610&&x>410&&y<525&y>475){
				context.beginPath();
				context.globalAlpha = 0.2;
				context.fillStyle = "red";
				context.rect((canvas.width/2)-100,(canvas.height/2),200,50);
				context.fill();
				context.globalAlpha = 1;
				}
			if(main_menu&&x<610&&x>410&&y<425&y>375&&down){
				main_menu = false;
				initialized=false;
				reset=false;
				//menu.initialize();
				menu.start();
				}
			if(main_menu&&x<610&&x>410&&y<475&y>425&&down){
				//console.log("I tried to quit", wait);
				if (wait>60){
				window.close();}
				}
			if(main_menu&&x<610&&x>410&&y<525&y>475&&down){
				//console.log("I tried to quit", wait);
				if (wait>60){
					menu_tunes.pause();
					credit_tunes.currentTime = 0;
					credit_tunes.play();
					credits=true;
					i=2400;
					z=0;
					q=2400;
					menu.credits();
					}
				}
			}
			else if(credits){
			
			menu.credits();	
			//console.log(credits);			
			}
		}
	}
	
	
	
	menu.map = function(){
	Game.mapdraw();
	Game.mapupdate();
	
	
	
	
	}
menu.death = function(x,y){

	context.beginPath();
	context.globalAlpha = 0.7;
	context.fillStyle = "black";
	context.rect(0,0,canvas.width,canvas.height);
	context.fill();
	context.beginPath();
	context.globalAlpha = 0.3;
	context.fillStyle = "white";
	context.rect((canvas.width/2)-265,(canvas.height/2)-205,530,100);
	context.fill();
	context.beginPath();
	//context.globalAlpha = 1;
	context.rect((canvas.width/2)-115,(canvas.height/2)-100,230,100);
	context.fill();
	context.fillStyle = "black";
	context.globalAlpha = 1;
	text.death();
	if (x<610&&x>410&&y<425&y>375){
		context.beginPath();
		context.globalAlpha = 0.2;
		context.fillStyle = "red";
		context.rect((canvas.width/2)-115,(canvas.height/2)-100,230,50);
		context.fill();
		context.globalAlpha = 1;
		}
	else if (x<610&&x>410&&y<475&y>425){
		context.beginPath();
		context.globalAlpha = 0.2;
		context.fillStyle = "red";
		context.rect((canvas.width/2)-115,(canvas.height/2)-50,230,50);
		context.fill();
		context.globalAlpha = 1;
		}
	if(paused&&!player.alive&&x<610&&x>410&&y<425&y>375&&down){
		//paused = false;
		player.res();
		Game.running = true;
		score=0;
		eFreq =120;
		Game.initialize();
		Game.run();
		game_tunes.currentTime = 0;
		game_tunes.play();
		}
	if(paused&&!player.alive&&x<610&&x>410&&y<475&y>425&&down){ 
		
		paused = true;
		main_menu=true;
		initialized=false;
		menu_tunes.currentTime = 0;
		menu.reset=true;
		wait=0;
		menu.start();
		
		
		}
	}
menu.pause = function(){

}

menu.credits = function(){
//this just runs the credits and returns you to the main menu
var lft_mgn=(290);
	//console.log("I'm here");
		menu.map();		
		context.beginPath();
		context.globalAlpha = 0.7;
		context.fillStyle = "black";
		context.rect(0,0,canvas.width,canvas.height);
		context.font = 'bold 80pt Calibri';
		context.fillStyle = 'black';
		context.fillText("CREDITS", (canvas.width/2)-180,i-1500);
	  	context.font = 'bold 35pt Calibri';
		context.fillStyle = 'white';
		
		
		context.globalAlpha = 1;
		context.drawImage(kShip,900, z-2500, 60, 60);
		context.drawImage(ToberWIN,120, z-800, 100, 100);
		context.drawImage(mTad,150, z-1900, 75, 100);
		context.drawImage(emblem,(canvas.width/2)-125, z-5600, 250, 250);
		context.drawImage(GLB,50, z-3200, 60, 60);
		context.globalAlpha = 0.7;
		
		context.fillText("Art", (canvas.width/2)-lft_mgn,i-1400);
			context.fillText("   Proj Design      MTadQT", (canvas.width/2)-lft_mgn,i-1350);
			context.fillText("   Ship Design      MTadQT", (canvas.width/2)-lft_mgn,i-1300);
		context.fillText("Game Design", (canvas.width/2)-lft_mgn,i-1200);
			context.fillText("   Development        Dan Murtha", (canvas.width/2)-lft_mgn,i-1150);
			context.fillText("   Coding                    Dan Murtha", (canvas.width/2)-lft_mgn,i-1100);
			context.fillText("   AI                            Dan Murtha", (canvas.width/2)-lft_mgn,i-1050);
			context.fillText("   Game Systems      Dan Murtha", (canvas.width/2)-lft_mgn,i-1000);
			context.fillText("   Audio Processing  Dan Murtha", (canvas.width/2)-lft_mgn,i-950);
		context.fillText("Music", (canvas.width/2)-lft_mgn,i-850);
			context.fillText("Track selection        Dan Murtha", (canvas.width/2)-lft_mgn,i-800);
			context.fillText("Sound effects           Dan Murtha", (canvas.width/2)-lft_mgn,i-750);
			context.fillText("Main Menu Music: Eight Bit Jungle", (canvas.width/2)-lft_mgn,i-650);
			context.fillText(" By TeknoAXE - TeknoAXE.com", (canvas.width/2)-lft_mgn,i-600);
			context.fillText("Main Game Music: Chiptune Heroes", (canvas.width/2)-lft_mgn,i-550);
			context.fillText("By TeknoAXE - TeknoAXE.com", (canvas.width/2)-lft_mgn,i-450);
			context.fillText("Credits Music: 'Plaint'", (canvas.width/2)-lft_mgn,i-400);
			context.fillText("By Kevin MacLeod (incompetech.com) ", (canvas.width/2)-lft_mgn,i-350,650);
			context.fillText("Licensed under Creative Commons:", (canvas.width/2)-lft_mgn,i-300);
			context.fillText("By Attribution 3.0", (canvas.width/2)-lft_mgn,i-250);
			context.fillText("http://creativecommons.org/licenses/by/3.0/", (canvas.width/2)-lft_mgn,i-200,600);
		context.fillText("Art Consulting", (canvas.width/2)-lft_mgn,i-100);
			context.fillText("   MTadQT", (canvas.width/2)-lft_mgn,i-50);
		context.fillText("Game Testers", (canvas.width/2)-lft_mgn,i+50);
			context.fillText("   GymLeaderBen", (canvas.width/2)-lft_mgn,i+100);
			context.fillText("   MTadQT", (canvas.width/2)-lft_mgn,i+150);
		context.fillText("Special Thanks", (canvas.width/2)-lft_mgn,i+250);
			context.fillText("   Dr. Andy Gill", (canvas.width/2)-lft_mgn,i+300);
		context.font = 'bold 80pt Calibri';
		context.fillStyle = 'black';
		context.fillText("Thanks for", (canvas.width/2)-240,i+1050);
		context.fillText("Playing!", (canvas.width/2)-180,i+1150);
		
		if((i+1050)>((canvas.height/2)-180)){i--;}
		if((z-5600)<(canvas.height/2)){z=z+2;}
		q--;
		
	/*
	for(var j=0;j<260;j++){
		context.beginPath();
		context.globalAlpha = ((1/260)*j);
		context.fillStyle = "black";
		context.rect(0,0,canvas.width,canvas.height);
		}*/
	context.globalAlpha = 1;
	if(q<(-1650)){
	credits=false;
	credit_tunes.pause();
	initialized = false;
	menu_tunes.currentTime = 0;
	menu_tunes.play();}
}
