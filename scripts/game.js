var Game = {};
var x = 0.0;
var y =0;
var running = false;
var len;
var map_itr=0;
var restarted=true;
var ygrowth;
var inc=false;
Game.initialize = function(){
player.alive=true;
gamemap.initialize();
score=0;
health=100;
shield=50;
boss=0;
x = 0.0;
y =0;
ygrowth=5;
running = false;
len;
map_itr=0;
this.proj = [];//array to contain player projectiles
this.pup = [];//array to contain powerups
this.Eproj = [];//array to contain the enemy projectiles
this.target = [];//array to contain the enemies
this.level = [level1,level2,level3,level4];//array of map assets
for(var i=0; i< 512; i++){
this.Eproj[i]=new bullet();
}
for(var i=0; i< 150; i++){
this.proj[i]=new bullet();
}
///The code below is supposed to have the pwoerup object in it but powerup is not working

for(var i=0; i< 64; i++){
this.pup[i] = new Pup();
}

for(var i=0; i< 32; i++){
this.target[i]=new enemy();
}

//////////////////////TEST CODE//////////////////////
if(main_menu){
	menu_tunes.play();}
if(!main_menu){
menu_tunes.pause();
play_single_sound();}
/////////////////////////////////////////////////////
}

Game.mapupdate = function(){
	if(main_menu){
		y = (y+1);
		}
	else{
		y = (y+ygrowth);
		if(y>4000&&!inc&&ygrowth<=30){
			ygrowth++;
			
			inc=true;
			}
		else if(y<2000){
			inc=false;
			}
		}
	if(y>7000){
	y=(y-7000);
		restarted=true;
		}

	if(restarted){
	map_itr=(map_itr+1)%4;
	restarted=false;
		}
	}


Game.update = function(){
	x = (x+1);

	Game.mapupdate();

	if((y%1000)==900&&eFreq>2){eFreq=eFreq-2;}
		if (down){
		blimit = (blimit+1)%5;
			if(blimit==0){
				play_multi_sound_shot('laser');
				Game.addBullet();}
		}
		
gamemap.update();
damaged.enemyhit();
damaged.playerhit();
damaged.maphit();
for(var i=0; i< this.proj.length; i++){
this.proj[i].update();
}
for(var i=0; i< this.Eproj.length; i++){
this.Eproj[i].update();
}
if(TSpawn==0){
//////FIX THIS 
//////right now it kills the enemy it comes across but I want it to check for dead enemies and revive only one of them each revive cycle
//////if all enemies are alive then it should not revive any
//////realistically, being alive with 25 enemies on screen should rarely ever happen, however it feels like a stain
	if (boss<50){
		this.target[Tcounter].makeAlive(0);
		Tcounter=(Tcounter+1)%32;
		boss++}
	else {
		this.target[Tcounter].makeAlive(1);
		Tcounter=(Tcounter+1)%32;
		boss=0;}
}
len = this.target.length;
for(var i=0; i< len; i++){
this.target[i].update();
}
len = this.pup.length;
for(var i=0; i< len; i++){
this.pup[i].update();
}
  
}


Game.run = function() {
if (!paused&&!main_menu){
  Game.update();}
  Game.draw();
};
//The funciton below spawns a power up and is called upon enemy death. Parameters are the enemy's x and y
Game.addPup = function(x,y){
  
  this.pup[pupCounter].makeAlive(x,y);
  pupCounter = (pupCounter+1)%64;  
}

Game.addEbullet = function(x,y,t){

this.Eproj[Ecounter].makeEAlive(x,y,player.xpos,player.ypos,t);
Ecounter = (Ecounter+1)%512;
}

Game.addBullet = function(){
if(score<50){
this.proj[bcounter].makeAlive(0);}
else if(score<100){
this.proj[bcounter].makeAlive(1);}
else if(score>=100){
this.proj[bcounter].makeAlive(2);}
bcounter = (bcounter+1)%150;
}
Game.mapdraw = function(){
/////////////////PROBLEM CODE//////////////////////
////The map flickers when transitioning from one to another
//////////////////////////////////////////////////
	context.clearRect(0, 0, canvas.width, canvas.height);
	if(y<=5976){/*display the one image*/
	//restarted=true;
	context.drawImage(this.level[map_itr],-100,-5976+y,1120,7000);}
	else if(y>5976){/*display both images*/
	/*if(restarted&&y>6991){map_itr=(map_itr+1)%4;
	restarted=false;}*/
	////the stutter is because these are out of sync when it transitions the new map to being displayed in the loop above. think about it.
	context.drawImage(this.level[(map_itr+1)%4],-100,-12976+y,1120,7000);
	context.drawImage(this.level[map_itr],-100,-5976+y,1120,7000);
	}

};
Game.draw = function(){
////Note: for fun, maybe I'll draw all the enemy projectiles under the clouds instead of over them...
	Game.mapdraw();
	if(!main_menu){
		len=this.proj.length;
		for(var i=0; i< len; i++){
			this.proj[i].draw();
			}
		}
	if (!paused){
		if(!main_menu){
			player.draw();
			}
		}
		else{player.drawpaused();}
	gamemap.draw();
	if(!main_menu){
	  //The loop below handles drawing the enemy projectiles
	len=this.Eproj.length;
	for(var i=0; i< len; i++){
		this.Eproj[i].draw();
		}
	   //The loop below handles drawing the enemies
	len=this.target.length
	for(var i=0; i< len; i++){
		this.target[i].draw();
		}
	  //The loop below is for drawing the power ups
	  len=this.pup.length
	for(var i=0; i< len; i++){
		this.pup[i].draw();
		}
	}
		
	if(paused||main_menu){menu.update();}
	if(!paused&&!main_menu){
	Eblimit=(Eblimit+1)%12;
	TSpawn=(TSpawn+1)%(eFreq-(ygrowth*4));
	shieldT=(shieldT+1)%120;}
	if(shield_tick!=0){player.shield_draw();}
	text.life();
}

Game.fps = 60;