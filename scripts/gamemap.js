var gamemap = {}
var maparray
var BlkVel = 3
var mapalpha;
gamemap.initialize = function(){
	gamemap.mapalpha=0.75;
	this.maparray = createArray(25,6);
	/*creates an array that's 25 6 item arrays
	for the 25 map objects that can be on screen at any time
	THE ARRAY IS CALLED maparray[5][24]   row and col is switched
	*/
	//gamemap.maparrayinit();
	gamemap.maparrayrandinit();
}

gamemap.randomup = function(j){

this.maparray[0][j]=(Math.random() * 1000) + 1;//xpos
this.maparray[1][j]=-((Math.random() * 2700) + 600);//ypos
this.maparray[2][j]=(Math.random() * 100) + 80;//width
this.maparray[3][j]=((Math.random() * 1000)%250)+100;//height
this.maparray[4][j]=1;//alive?

}

gamemap.update = function(){
for(var i=0;i<this.maparray.length;i++){
		if(this.maparray[4][i]==1){
		this.maparray[1][i]=this.maparray[1][i]+BlkVel+ygrowth-5;}
		if(this.maparray[1][i]>1024){this.maparray[4][i]=0;}
	}
	
}

gamemap.makeAlive = function(x){
this.maparray[4][x]=1;
}

gamemap.draw = function(){
	context.beginPath();
	context.globalAlpha = gamemap.mapalpha;
	for(var i=0;i<this.maparray.length;i++){
		if(this.maparray[4][i]==1){
		//context.beginPath();
		context.fillRect(this.maparray[0][i],this.maparray[1][i],this.maparray[2][i],this.maparray[3][i]);
		context.fillStyle = 'grey';
		context.fill();
		context.stroke();}
		else{this.randomup(i);}
	}
context.globalAlpha = 1;
}

gamemap.maparrayrandinit = function(){
for (var j=0;j<this.maparray.length;j++){
this.maparray[0][j]=(Math.random() * 1000) + 1;
this.maparray[1][j]=-((Math.random() * 3000) + 1000);
this.maparray[2][j]=(Math.random() * 100) + 80;
this.maparray[3][j]=((Math.random() * 1000)%250)+100;
this.maparray[4][j]=1;}

}
////////////////////////////////////////
////I'll most likely always use the random array save the few 
////moments I want to configure my own block layout maybe 
////for a boss fight or something
gamemap.maparrayinit = function(){
//this.maparay[propertynumber][object_ID]
/////////////////////////////
//xpos=xposition
//ypos=yposition
//width=height from top
//height=width from left side
//prop1 is alive
//prop2?? Ahaha why don't I make prop 2 the block velocity and just randomize it
/////////////////////////////
this.maparray[0][0]=200;//xpos
this.maparray[1][0]=0;//ypos
this.maparray[2][0]=200;//heightx
this.maparray[3][0]=100;//widthx
this.maparray[4][0]=1;//prop1
this.maparray[5][0]=0;//prop2
/////////////////////////////
this.maparray[0][1]=4;//xpos
this.maparray[1][1]=4;//ypos
this.maparray[2][1]=4;//heightx
this.maparray[3][1]=4;//widthx
this.maparray[4][1]=4;//prop1
this.maparray[5][1]=4;//prop2
/////////////////////////////
this.maparray[0][2]=4;//xpos
this.maparray[1][2]=4;//ypos
this.maparray[2][2]=4;//width
this.maparray[3][2]=4;//height
this.maparray[4][2]=4;//prop1
this.maparray[5][2]=4;//prop2
/////////////////////////////
this.maparray[0][3]=4;//xpos
this.maparray[1][3]=4;//ypos
this.maparray[2][3]=4;//width
this.maparray[3][3]=4;//height
this.maparray[4][3]=4;//prop1
this.maparray[5][3]=4;//prop2
/////////////////////////////
this.maparray[0][4]=4;//xpos
this.maparray[1][4]=4;//ypos
this.maparray[2][4]=4;//width
this.maparray[3][4]=4;//height
this.maparray[4][4]=4;//prop1
this.maparray[5][4]=4;//prop2
/////////////////////////////
this.maparray[0][5]=4;//xpos
this.maparray[1][5]=4;//ypos
this.maparray[2][5]=4;//width
this.maparray[3][5]=4;//height
this.maparray[4][5]=4;//prop1
this.maparray[5][5]=4;//prop2
/////////////////////////////
this.maparray[0][6]=4;//xpos
this.maparray[1][6]=4;//ypos
this.maparray[2][6]=4;//width
this.maparray[3][6]=4;//height
this.maparray[4][6]=4;//prop1
this.maparray[5][6]=4;//prop2
/////////////////////////////
this.maparray[0][7]=4;//xpos
this.maparray[1][7]=4;//ypos
this.maparray[2][7]=4;//width
this.maparray[3][7]=4;//height
this.maparray[4][7]=4;//prop1
this.maparray[5][7]=4;//prop2
/////////////////////////////
this.maparray[0][8]=4;//xpos
this.maparray[1][8]=4;//ypos
this.maparray[2][8]=4;//width
this.maparray[3][8]=4;//height
this.maparray[4][8]=4;//prop1
this.maparray[5][8]=4;//prop2
/////////////////////////////
this.maparray[0][9]=4;//xpos
this.maparray[1][9]=4;//ypos
this.maparray[2][9]=4;//width
this.maparray[3][9]=4;//height
this.maparray[4][9]=4;//prop1
this.maparray[5][9]=4;//prop2
/////////////////////////////
this.maparray[0][10]=4;//xpos
this.maparray[1][10]=4;//ypos
this.maparray[2][10]=4;//width
this.maparray[3][10]=4;//height
this.maparray[4][10]=4;//prop1
this.maparray[5][10]=4;//prop2
/////////////////////////////
this.maparray[0][11]=4;//xpos
this.maparray[1][11]=4;//ypos
this.maparray[2][11]=4;//width
this.maparray[3][11]=4;//height
this.maparray[4][11]=4;//prop1
this.maparray[5][11]=4;//prop2
/////////////////////////////
this.maparray[0][12]=4;//xpos
this.maparray[1][12]=4;//ypos
this.maparray[2][12]=4;//width
this.maparray[3][12]=4;//height
this.maparray[4][12]=4;//prop1
this.maparray[5][12]=4;//prop2
/////////////////////////////
this.maparray[0][13]=4;//xpos
this.maparray[1][13]=4;//ypos
this.maparray[2][13]=4;//width
this.maparray[3][13]=4;//height
this.maparray[4][13]=4;//prop1
this.maparray[5][13]=4;//prop2
/////////////////////////////
this.maparray[0][14]=4;//xpos
this.maparray[1][14]=4;//ypos
this.maparray[2][14]=4;//width
this.maparray[3][14]=4;//height
this.maparray[4][14]=4;//prop1
this.maparray[5][14]=4;//prop2
/////////////////////////////
this.maparray[0][15]=4;//xpos
this.maparray[1][15]=4;//ypos
this.maparray[2][15]=4;//width
this.maparray[3][15]=4;//height
this.maparray[4][15]=4;//prop1
this.maparray[5][15]=4;//prop2
/////////////////////////////
this.maparray[0][16]=4;//xpos
this.maparray[1][16]=4;//ypos
this.maparray[2][16]=4;//width
this.maparray[3][16]=4;//height
this.maparray[4][16]=4;//prop1
this.maparray[5][16]=4;//prop2
/////////////////////////////
this.maparray[0][17]=4;//xpos
this.maparray[1][17]=4;//ypos
this.maparray[2][17]=4;//width
this.maparray[3][17]=4;//height
this.maparray[4][17]=4;//prop1
this.maparray[5][17]=4;//prop2
/////////////////////////////
this.maparray[0][18]=4;//xpos
this.maparray[1][18]=4;//ypos
this.maparray[2][18]=4;//width
this.maparray[3][18]=4;//height
this.maparray[4][18]=4;//prop1
this.maparray[5][18]=4;//prop2
/////////////////////////////
this.maparray[0][19]=4;//xpos
this.maparray[1][19]=4;//ypos
this.maparray[2][19]=4;//width
this.maparray[3][19]=4;//height
this.maparray[4][19]=4;//prop1
this.maparray[5][19]=4;//prop2
/////////////////////////////
this.maparray[0][20]=4;//xpos
this.maparray[1][20]=4;//ypos
this.maparray[2][20]=4;//width
this.maparray[3][20]=4;//height
this.maparray[4][20]=4;//prop1
this.maparray[5][20]=4;//prop2
/////////////////////////////
this.maparray[0][21]=4;//xpos
this.maparray[1][21]=4;//ypos
this.maparray[2][21]=4;//width
this.maparray[3][21]=4;//height
this.maparray[4][21]=4;//prop1
this.maparray[5][21]=4;//prop2
/////////////////////////////
this.maparray[0][22]=4;//xpos
this.maparray[1][22]=4;//ypos
this.maparray[2][22]=4;//width
this.maparray[3][22]=4;//height
this.maparray[4][22]=4;//prop1
this.maparray[5][22]=4;//prop2
/////////////////////////////
this.maparray[0][23]=4;//xpos
this.maparray[1][23]=4;//ypos
this.maparray[2][23]=4;//width
this.maparray[3][23]=4;//height
this.maparray[4][23]=4;//prop1
this.maparray[5][23]=4;//prop2
/////////////////////////////
this.maparray[0][24]=4;//xpos
this.maparray[1][24]=4;//ypos
this.maparray[2][24]=4;//width
this.maparray[3][24]=4;//height
this.maparray[4][24]=4;//prop1
this.maparray[5][24]=4;//prop2
/////////////////////////////
}





