// js canvas trials 

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


var ballRadious = 20;
var xPosition = canvas.width/2;
var yPosition = canvas.height-ballRadious;

var dx = 1;
var dy = 1;


function drawBall(color) {
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, ballRadious, 0, 2*Math.PI); //  360 = 2*Math.PI
    if(color) {
        ctx.fillStyle = color;
    } else {
        ctx.fillStyle = 'blue';
    }
    ctx.fill();
    ctx.closePath();
}

function generateValues() {
    let arr = [];
    for (i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random() * 255));
    }
    return arr;
}

function changeColor(generateValues) {
    let rgb = `rgb(${generateValues[0]}, ${generateValues[1]}, ${generateValues[2]})`;
}


function mainGame() {
    // clears whole canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // checking wall collision
    if(xPosition + dx < ballRadious || xPosition + dx > canvas.width-ballRadious) {
        dx = -dx;
        color = changeColor(generateValues());
    }
    if(yPosition + dy < ballRadious || yPosition + dy > canvas.height-ballRadious) {
        dy = -dy;
        color = changeColor(generateValues());
    }

    xPosition += dx;
    yPosition += dy;
}

// every 10 milisec draw function is called
//setInterval(mainGame, 10);























// ctx.beginPath();
// ctx.rect(50, 50, 40, 40);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.fillStyle = 'blue';
// ctx.fillRect(40, 40, 50, 50);

// // draw circle
// ctx.beginPath();
// ctx.arc(300, 300, 50, 0, 2*Math.PI);
// ctx.fillStyle = 'white';
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(300, 50, 50, 50);
// ctx.strokeStyle = 'red';
// ctx.stroke();
// ctx.closePath();