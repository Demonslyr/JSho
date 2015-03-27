function Pup() {//RENAME THSI FUNCITON TO THE PUP FUINCTION
this.xloc = 0;
this.yloc = 0;
this.dir= (-1);
this.alive = false;
this.pvel = 7;
this.drift = Math.random(2)-1;
this.type= 1;//Math.random(3)+1; This code will be implemented once the PUP works
};

Pup.prototype.hitP = function(px,py){
var hit =false;
if(alive==false){return;}
else if((px-15) <= (this.xloc+15) && (this.xloc-15) <= (px+15) &&
          (py-15) <= (this.yloc+15) && (this.yloc-15) <= (py+15)&&this.alive==true){
			hit=true;
			this.alive=false;
			this.PUpEffect();
			//return hit;
			}
}
Pup.prototype.PUpEffect = function(){
	if(this.type==1){
		//this is a powerup that increases your score. each enemy should drop one of these
		shield+=2;
		score++;
		}
	else if(this.type==2){
		//lets say this will be a bigger gun powerup they will drop rarely
	
	}
	else if(this.type==3){
	
	//lets say this will be a focus powerup to slow down the game speed
	//it will set ygrowth lower or maybe I'll make it a focus meter that will temporarily lower the ygrowth...idk
		}
	}

Pup.prototype.makeAlive = function(x,y){
  //console.log("A Pup was made alive. Also, x and y are "+x+" "+y);
this.xloc = x;
this.yloc = y;
this.alive = true;
this.dir=(-1);
this.drift = Math.random(2)-1;
this.type= 1;//Math.random(3)+1; type will always be 1 for now
}

Pup.prototype.update = function(){
if(this.alive){
  
	if(this.dir==1){
	this.yloc=this.yloc-(this.dir*this.pvel);}
	else if(this.dir==(-1)){
	this.yloc=this.yloc-(this.dir*this.pvel);}
	}
if(this.yloc<(-25) ||this.yloc>1050){
this.alive=false;
}
}
Pup.prototype.draw =function(){
if(this.alive){
    //console.log(this.dir);
	//make some interesting looking projectile here
	//console.log("gonna draw it at "+this.xloc+", "+this.yloc);
	context.drawImage(PUp_proj,this.xloc-25,this.yloc, 50, 50);}
	}