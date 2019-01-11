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
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y, this.size, 0, 2* Math.PI);
    ctx.fill();
}

//to actually start moving the ball, we need an update function of some kind
//check whether the ball has reached the edge of the canvas. If it has, we reverse the polarity of the relevant velocity to make the ball travel in the opposite direction.
Ball.prototype.update = function(){
    if ((this.x + this.size) >= width ) {
        this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= heigth) {
        this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

// ball collision
// just setting the color property of both the circles to a new random color. 
Ball.prototype.collisionDetect= function(){
    for (let j=0; j<balls.length; j++){
        if (!(this === balls[j])) {
            let dx = this.x - balls[j].x;
            let dy = this.y - balls[j].y;
            let distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < (this.size+ balls[j].size)) {
                balls[j].color = this.color = 'rgba(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +','+ (Math.random()).toFixed(1)+')';
            }
        }
    }
}

// store the balls
const balls = [];

// animate the balls
function loop(){
    
    // cover up the previous frame's drawing before the next one is drawn
    ctx.fillRect(0,0,width,heigth);
    // create a new instance of our Ball()
    while (balls.length <15) {
        let size = random(10,20);
        let ball = new Ball(
            random(0+size,width-size),
            random(0+size,heigth-size),
            random(-7,7),
            random(-7,7),
            'rgba(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +','+ (Math.random()).toFixed(1)+')',
            size
        );
        console.log('added a new ball: '+ball);
        balls.push(ball);
    }

    for (let i = 0; i < balls.length; i++) {
        console.log('drawing the ball');
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    //when this method is constantly run and passed the same function name, it will run that function a set number of times per second to create a smooth animation
    requestAnimationFrame(loop);
}

loop();