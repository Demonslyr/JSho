function bullet() {
this.xloc = 0;
this.yloc = 0;
this.dir;
this.alive = false;
this.bvel = 25;
this.evel =10;
this.type=0;
this.xinc =0;
};

bullet.prototype.hitP = function(px,py){
var hit =false;
if(alive==false){return false;}
else if((px-15) <= (this.xloc+10) && (this.xloc-10) <= (px+15) &&
          (py-15) <= (this.yloc+10) && (this.yloc-10) <= (py+15)&&this.alive==true){
			hit=true;
			this.alive=false;
			return hit;
			}

}


bullet.prototype.makeAlive = function(x){
this.type=x;
this.xloc = mouse.x;
this.yloc = mouse.y;
this.alive = true;
this.dir=1;
}

bullet.prototype.makeEAlive = function(x,y,px,py,t){
this.xloc = x;
	if(t==0){
	this.evel =10;
	this.xinc =10*((px-x)/(py-y));
	}
	else if(t==3){
	this.evel =25;
	this.xinc =10*((px-x)/(py-y));
	}
	else if(t==5){
	this.evel =15;
	this.xinc =10*((px-x)/(py-y));
	}
	else {
	this.evel =15;
	this.xinc =5*((px-x)/(py-y));
	}
this.yloc = y;
this.type=t;
//this.evel =10;
this.alive = true;
this.dir=(-1);
}

bullet.prototype.update = function(){
if(this.alive){
	if(this.dir==1){
	this.yloc=this.yloc-(this.dir*this.bvel);}
	else if(this.dir==(-1)){
	this.xloc=this.xloc+this.xinc;
	this.yloc=this.yloc-(this.dir*this.evel);}
}
if(this.yloc<(-25) ||this.yloc>1050){
this.alive=false;
}
}
bullet.prototype.draw =function(){
if(this.alive){
	if(this.type==0){

			if(this.dir==1){
			context.drawImage(fShot,this.xloc-25,this.yloc, 50, 50);}
			else if(this.dir==(-1)){
			context.drawImage(EShot_1,this.xloc-15,this.yloc, 30, 30);}
			}
	else if(this.type==1){
			context.drawImage(fShot,this.xloc-20,this.yloc, 75, 50);
		
			context.drawImage(fShot,this.xloc-55,this.yloc, 75, 50);
			}
	else if(this.type==2){
		context.drawImage(fShot,this.xloc-15,this.yloc, 90, 50);
		
		context.drawImage(fShot,this.xloc-45,this.yloc-25, 90, 50);
		
		context.drawImage(fShot,this.xloc-75,this.yloc, 90, 50);
			}
	else if(this.type==3||4||5){
		context.drawImage(EShot_0,this.xloc-15,this.yloc, 90, 50);
		
		context.drawImage(EShot_0,this.xloc-45,this.yloc-25, 90, 50);
		
		context.drawImage(EShot_0,this.xloc-75,this.yloc, 90, 50);
			}
		
		
		}
		
		
		
		
	}