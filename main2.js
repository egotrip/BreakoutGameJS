// Breakout Game 2D - classes approach
//  

// main variables
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


let startingX = canvas.width/2;
let startingY = canvas.height-30;


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
        this.checkCollision();
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
            this.fillStyle = this.changeColor();
        }
        if(this.y + this.dy > canvas.height-this.ballRadious || this.y + this.dy < this.ballRadious) {
            this.dy = -this.dy;
            this.fillStyle = this.changeColor();
        }


        this.constantBallMovement();
    }

    changeColor() {
        let arr = [];
        for(let i = 0; i < 3; i++) {
            arr.push(Math.floor(Math.random() * 255));
        }
        return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    }
}


// paddle
class Paddle{

    pWidth = 80;
    pHeight = 15;
    
    paddleX = (canvas.width - this.pWidth) / 2;
    paddleY = canvas.height - 2*this.pHeight;

    leftPressed = false;
    rightPressed = false;

    isMoving = false;
    movingX = 1;

    constructor(ctx) {
        this.ctx = ctx;
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.paddleX, this.paddleY, this.pWidth, this.pHeight);
        this.movePaddle();
        this.ctx.closePath();
    }

    movePaddle() {
        console.log(this.paddleX);
        this.checkWalls();
        
        if(this.leftPressed) {
            this.isMoving = true;
            this.movingX = -Math.abs(this.movingX);
        }
        if(this.rightPressed) {
            this.isMoving = true;
            this.movingX = Math.abs(this.movingX);
        }

        // actual movement 
        if(this.isMoving) {
            this.paddleX += this.movingX;
        }
    }

    checkWalls() {
        if(this.paddleX < 0 || this.paddleX > canvas.width-this.pWidth) {
            this.movingX = -this.movingX;
        }
    }
}






// create gameBall object used in mainGame
const gameBall = new Ball(startingX, startingY, ctx, 'blue');
const paddle = new Paddle(ctx);


// buttons being pressed
document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowRight") {
        paddle.rightPressed = true;
    }
    if(event.key === "ArrowLeft") {
        paddle.leftPressed = true;
    }
});


// button stopped being pressed
document.addEventListener("keyup", function(event) {
    if(event.key === "ArrowRight") {
        paddle.rightPressed = false;
    }
    if(event.key === "ArrowLeft") {
        paddle.leftPressed = false;
    }
});

function mainGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle.drawPaddle();
    gameBall.drawBall();

}

// game loop
//setInterval(mainGame, 10);