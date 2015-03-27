var damaged = {}

damaged.enemyhit = function (){
	for(var i =0;i<32;i++){
	///////Note: try to , on rare occasion, give the enemy a smaller hit box...or for fun randomize them all!!!
		if(Game.target[i].alive){
			for(var j=0; j< 150; j++){
				if(score<50){
					if(Game.target[i].xloc<(Game.proj[j].xloc+15)&&Game.target[i].xloc>(Game.proj[j].xloc-15)&&Game.target[i].yloc<(Game.proj[j].yloc+20)&&Game.target[i].yloc>(Game.proj[j].yloc-20)){
						if(Game.target[i].type==0){
								Game.target[i].alive=false;
								//Game.addEbullet(Game.target[i].xloc, Game.target[i].yloc,3);
								Game.addPup(Game.target[i].xloc, Game.target[i].yloc);
							}
						else{if(Game.target[i].hp!=0){
								Game.target[i].hp--;
								score++;
								}
							else{Game.target[i].alive=false;
							     //Game.target[i].death();
							}
							}
						play_multi_sound_exp('explosion');
						//score++;
						}}
				else if(score<100){	
					if(Game.target[i].xloc<(Game.proj[j].xloc+25)&&Game.target[i].xloc>(Game.proj[j].xloc-25)&&Game.target[i].yloc<(Game.proj[j].yloc+20)&&Game.target[i].yloc>(Game.proj[j].yloc-20)){
						if(Game.target[i].type==0){
							Game.target[i].alive=false;
							Game.addEbullet(Game.target[i].xloc, Game.target[i].yloc,3);
							Game.addPup(Game.target[i].xloc, Game.target[i].yloc);
							}
						else{if(Game.target[i].hp!=0){
								Game.target[i].hp--;
								score++;
								}
							else{Game.target[i].alive=false;
								 //Game.target[i].death();
							}
							}
					play_multi_sound_exp('explosion');
					//score++;
					}}
				else if(score>=100){
				if(Game.target[i].xloc<(Game.proj[j].xloc+35)&&Game.target[i].xloc>(Game.proj[j].xloc-35)&&Game.target[i].yloc<(Game.proj[j].yloc+20)&&Game.target[i].yloc>(Game.proj[j].yloc-20)){
					if(Game.target[i].type==0){
						Game.target[i].alive=false;
						Game.addEbullet(Game.target[i].xloc, Game.target[i].yloc,3);
						Game.addPup(Game.target[i].xloc, Game.target[i].yloc);
						}
					else{if(Game.target[i].hp!=0){
							Game.target[i].hp--;
							score++;
							}
						else{Game.target[i].alive=false;
							 //Game.target[i].death();
						}
						}
					play_multi_sound_exp('explosion');
					//score++;
					}}
				}
		
			}
		}
}
damaged.playerhit = function (){
	var px = player.xpos;
	var py = player.ypos;
	for(var i =0;i<512;i++){
		if(Game.Eproj[i].hitP(px,py)){
			player.collision(2);
			return;
			}
		}
	for (var i = 0; i<64;i++){
		Game.pup[i].hitP(px,py);		  
		}
	}

damaged.maphit = function (){
	var px=player.xpos;
	var py=player.ypos;
	var hit=false;		
	if(shieldT==0){if(shield<100){shield++;}}
	for(var i =0;i<25;i++){
		var Mxloc =gamemap.maparray[0][i];
		var Myloc =gamemap.maparray[1][i];
		var Mwidth =gamemap.maparray[2][i];
		var Mheight =gamemap.maparray[3][i];
		//if(i==0){console.log(px, py, Mxloc, Myloc, Mwidth, Mheight,((px-10)<=(Mxloc+Mwidth) &&(Mxloc)<=(px+10)&&(py-10)<=(Myloc+Mheight)&&(Myloc)<=(py+10)));}
		if((px-10)<=(Mxloc+Mwidth) &&(Mxloc)<=(px+10)&&(py-10)<=(Myloc+Mheight)&&(Myloc)<=(py+10)){
			player.collision(1);
			hit==true;
			return;
			}
	}
}