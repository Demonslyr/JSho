function enemy() {
this.xloc = (Math.random() * 1000) + 1;;
this.yloc = 0;;
this.alive = false;;
this.evel = 25;;
this.action = 0; 
this.centered =false;
this.type=0;
this.angle =0;
this.age=0;
this.hp=15;
this.depth =(Math.random() * 150) + 100;;
this.center=(Math.random() * 400) + 300;;
// 0 normal pathing
// 1 entering
// 2 leaving
// 3 dead

};

enemy.prototype.makeAlive = function(t){
this.xloc = (Math.random() * 1000) + 1;;
this.type=t;
this.yloc = 0;;
this.evel = 25;;
this.action = 0; 
this.centered =false;
this.alive = true;;
}

enemy.prototype.resetCenter = function(){

this.centered=false;
this.depth =(Math.random() * 250) + 50;
this.center=(Math.random() * 400) + 300;



}

enemy.prototype.death = function(){
  //place the enemy death code in here and the effect is based on the x,y and enemy type. This function should not need any parameters
  for(var j = 0; j<10;j++){
    Game.addEbullet(this.xloc, this.yloc,5);
  }
}

enemy.prototype.update = function(){
	if(this.alive){
//put the enemy movement logic here
		if(this.yloc<this.depth-5){this.yloc=this.yloc+3;}
		else if(this.yloc>this.depth+5){this.yloc=this.yloc-3;}
		if(this.centered==false){
			if(this.xloc<(this.center+5)&&this.xloc>(this.center-5)){this.centered=true;}
			else if (this.xloc>(this.center-5)){this.xloc=this.xloc-6;}
			else if (this.xloc<(this.center+5)){this.xloc=this.xloc+6;}
			}
		else{
		if(this.center<500){
		this.xloc =this.xloc+(15*(Math.sin(this.angle)));}
		else{this.xloc =this.xloc-(15*(Math.sin(this.angle)));}
		this.angle=(this.angle+0.06)%360;}
		}
}
enemy.prototype.draw =function(){

if(this.alive){
	if(this.type==0){
			context.drawImage(eShip,this.xloc-30,this.yloc-30, 60, 60);
			if(this.age==0){this.resetCenter();}
			if(Eblimit==0){Game.addEbullet(parseInt(this.xloc),parseInt(this.yloc),0);}
			this.age=(this.age+1)%190;
				}
	if(this.type==1){
		context.drawImage(mb_Ship_0,this.xloc-75,this.yloc-45, 150, 90);
		if(this.age==0){this.resetCenter();}
		if(Eblimit==0){Game.addEbullet(parseInt(this.xloc),parseInt(this.yloc),4);}
		this.age=(this.age+1)%190;
			}
		}
}