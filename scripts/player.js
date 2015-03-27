var player = {}
var xpos=0;
var ypos=0;
var alive=true;
player.draw=function(){
////this modified player draw function limits the player's ship to being drawin only inside the canvas
var x = mouse.x;
var y = mouse.y;
if(x<canvas.width-15&&x>15){player.xpos=x;}
else if(x>canvas.width-15){player.xpos=canvas.width-15;}
else if(x<15){player.xpos=15;}

if(y<canvas.height-30&&y>30){player.ypos=y;}
else if(y>canvas.height-30){player.ypos=canvas.height-30;}
else if(y<30){player.ypos=30;}

context.drawImage(pShip,player.xpos-30, player.ypos-30, 60, 60);
}

player.res= function(){
	xpos=0;
	ypos=0;
	alive=true;
	health= 100;
	shield=50;
}

player.shield_draw=function(){
	context.globalAlpha = shield_tick/20;
	context.drawImage(shield_dmg,player.xpos-40, player.ypos-50, 80, 70);
	context.globalAlpha = 1;
	shield_tick--;
}

player.drawpaused=function(){
context.drawImage(pShip,player.xpos-30, player.ypos-30, 60, 60);
}
player.collision = function(x){
//updates the player info after a collision with upgrades or damage
//console.log("I made it in here",x);
	if(x==1||x==2){
	
		if(shield>0){
		//player.alive=true;
			play_multi_sound_dmg('shield_damaged');
			shield_tick=20;
			shield--;}
		else if(health<1){
			play_multi_sound_exp('explosion');
			player.alive=false;
			paused=true;
			game_tunes.pause();
			menu.update();}
		else if(shield<1){
			play_multi_sound_dmg('hp_damaged');
			shield_tick=0;
			health--;}
		
		}

}