//using Canvas API for drawing the balls on the screen  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
//using requestAnimationFrame API for animating the whole display  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

//create a context on which we can start to draw
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const heigth = canvas.height = window.innerHeight;

// create a function which returns a random number in the range 
function random(min,max){
    let num = Math.floor((Math.random()* (max-min+1))+min);
    return num;
}

//add a following constructor for the balls
function Ball(x,y,velX,velY,color,size){
    this.x =x;
    this.y =y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

//draw the ball
Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle =this.color;
    ctx.arc(this.x,this.y, this.size, 0, 2* Math.PI);
    ctx.fill();
}