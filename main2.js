// Breakout Game 2D - classes approach
//  

// main variables
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var startingX = canvas.width/2;
var startingY = canvas.height-20;


class Ball{

    dx = 1;
    dy = 1;
    ballRadious = 20;

    constructor(x, y, ctx, fillStyle) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.fillStyle = fillStyle;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadious, 0, 2*Math.PI);
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.fill();
        this.ctx.closePath();
    }

    constantBallMovement() {
        this.x += this.dx;
        this.y += this.dy;
    }

    checkCollision() {
        if(this.x + this.dx > canvas.width-this.ballRadious || this.x + this.dx < this.ballRadious) {
            this.dx = -this.dx;
        }
        if(this.y + this.dy > canvas.height-this.ballRadious || this.y + this.dy < this.ballRadious) {
            this.dy = -this.dy;
        }

        this.constantBallMovement();
    }
}

// create gameBall object used in mainGame
const gameBall = new Ball(startingX, startingY, ctx, 'blue');


function mainGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameBall.drawBall();
    gameBall.checkCollision();
}

// game loop
//setInterval(mainGame, 10);