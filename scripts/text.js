var text ={}
text.life = function(){

      context.font = 'bold 40pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("Shields:", 30, 50);
	  context.fillText("Health:", 40, 100);
	  context.fillText("Score:", 700, 50);
	  context.fillText(shield, 200, 50);
	  context.fillText(health, 200, 100);
	  context.fillText(score, 838, 50);
	  context.fillStyle = 'grey';

}
text.pause = function(){
	  context.font = 'bold 80pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("PAUSED", (canvas.width/2)-180,(canvas.height/2)-120);
	  	  context.font = 'bold 35pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("Continue", (canvas.width/2)-90,(canvas.height/2)-60);
	  context.fillText("Menu", (canvas.width/2)-58,(canvas.height/2)-10);

}
text.death = function(){
	  context.font = 'bold 80pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("Game Over", (canvas.width/2)-250,(canvas.height/2)-120);
	  	  context.font = 'bold 35pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("Try Again?", (canvas.width/2)-100,(canvas.height/2)-60);
	  context.fillText("Menu", (canvas.width/2)-58,(canvas.height/2)-10);

}
text.main_menu = function(){
	  context.font = 'bold 80pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("JSho!", (canvas.width/2)-120,(canvas.height/2)-120);
	  	  context.font = 'bold 35pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("Start", (canvas.width/2)-52,(canvas.height/2)-60);
	  context.fillText("Quit", (canvas.width/2)-45,(canvas.height/2)-10);
	  context.fillText("Credits", (canvas.width/2)-65,(canvas.height/2)+40);

}
text.credits = function(){
		////maybe store the credits lines in a list of strings and 
		////make them scroll/come to life like the rectangle clouds
	  context.font = 'bold 80pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("JSho!", (canvas.width/2)-120,(canvas.height/2)-120);
	  	  context.font = 'bold 35pt Calibri';
	  context.fillStyle = 'black';
      context.fillText("Start", (canvas.width/2)-52,(canvas.height/2)-60);
	  context.fillText("Quit", (canvas.width/2)-45,(canvas.height/2)-10);

}


