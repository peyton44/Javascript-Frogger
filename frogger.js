var froggerScore = 0;
var froggerLives = 3;
var initializeFrogger = false;
var froggerDirection = "l";
var drawFroggerGameOver = false;


var frogger = function(i,j){
    this.i = i;
    this.j = j;
};

var myFrogger = new frogger(9, 19); // middle

frogger.prototype.draw = function(){

    switch(froggerDirection){
    case "f":
        fill(32, 77, 16);
        noStroke();
        ellipse(this.i*20 + 10, this.j*20 + 10, 10, 10);
        ellipse(this.i*20+10, this.j*20 + 5, 8,8);
        stroke(26, 92, 19);
        line(this.i*20 + 2, this.j*20 + 5, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 18, this.j*20 + 5, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 2, this.j*20 + 15, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 18, this.j*20 + 15, this.i*20+10, this.j*20 + 8);
    break;
    case "l":
        fill(32, 77, 16);
        noStroke();
        ellipse(this.i*20 + 10, this.j*20 + 10, 10, 10);
        ellipse(this.i*20+5, this.j*20 + 10, 8,8);
        stroke(26, 92, 19);
        line(this.i*20 + 4, this.j*20 + 2, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 18, this.j*20 + 5, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 5, this.j*20 + 18, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 18, this.j*20 + 15, this.i*20+10, this.j*20 + 8);
    break;
    case "r":
        fill(32, 77, 16);
        noStroke();
        ellipse(this.i*20 + 10, this.j*20 + 10, 10, 10);
        ellipse(this.i*20+15, this.j*20 + 10, 8,8);
        stroke(26, 92, 19);
        line(this.i*20 + 4, this.j*20 + 2, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 18, this.j*20 + 2, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 5, this.j*20 + 18, this.i*20+10, this.j*20 + 8);
        line(this.i*20 + 18, this.j*20 + 18, this.i*20+10, this.j*20 + 8);
    break;
    case "re":
        fill(32, 77, 16);
        noStroke();
        ellipse(this.i*20 + 10, this.j*20 + 10, 10, 10);
        ellipse(this.i*20+10, this.j*20 + 15, 8,8);
        stroke(26, 92, 19);
        line(this.i*20 + 2, this.j*20 + 6, this.i*20+10, this.j*20 + 10);
        line(this.i*20 + 18, this.j*20 + 6, this.i*20+10, this.j*20 + 10);
        line(this.i*20 + 2, this.j*20 + 16, this.i*20+10, this.j*20 + 10);
        line(this.i*20 + 18, this.j*20 + 16, this.i*20+10, this.j*20 + 10);
    break;
    }

};

var froggerField = [];

var moveLogTimer = 0;

var moveLogs = function(){
    moveLogTimer++;
    if(moveLogTimer > 100){
    for(var i=3; i<10; i = i + 2){
        var split = froggerField[i].split('');
        split.shift();
        var option = Math.floor(random(0,3));

        switch(option){
        case 0: split.push("l");
        break;
        case 1: split.push("w");
        break;
        case 2: split.push("w");
        break;
        }
        froggerField[i] = split.join('');

        if(myFrogger.j === i){
            myFrogger.i--;
        }
    }
    for(var i=4; i<10; i = i + 2){
        var split = froggerField[i].split('');
        split.pop();
        var option = Math.floor(random(0,2));

        switch(option){
        case 0: split.unshift("l");
        break;
        case 1: split.unshift("w");
        break;
        }
        froggerField[i] = split.join('');

        if(myFrogger.j === i){
            myFrogger.i++;
        }
    }

    moveLogTimer = 0;
    }
};

var moveCarTimer = 0;
var moveCars = function(){
    moveCarTimer++;

    if(moveCarTimer > 150){
        for(var i = 13; i < 18; i = i + 2){
            var split = froggerField[i].split('');
            split.shift();
            var option = Math.floor(random(0,3));

            switch(option){
            case 0:
                var color = Math.floor(random(0,3));
                switch(color){
                case 0: split.push("x");
                break;
                case 1: split.push("y");
                break;
                case 2: split.push("z");
                break;
                }
            break;
            case 1: split.push("r");
            break;
            case 2: split.push("r");
            break;
            }
            froggerField[i] = split.join('');
        }

        for(var i = 14; i < 18; i = i + 2){
            var split = froggerField[i].split('');
            split.pop();
            var option = Math.floor(random(0,3));

            switch(option){
            case 0:
                var color = Math.floor(random(0,3));
                switch(color){
                case 0: split.unshift("x");
                break;
                case 1: split.unshift("y");
                break;
                case 2: split.unshift("z");
                break;
                }
            break;
            case 1: split.unshift("r");
            break;
            case 2: split.unshift("r");
            break;
            }
            froggerField[i] = split.join('');
        }

        moveCarTimer = 0;
    }
};


var drawWater = function(i,j){
    fill(0, 21, 255);
    noStroke();
    rect(i,j, 20, 20);
    stroke(0,0,0);
};

var drawGrass = function(i,j){
    fill(68, 214, 15);
    noStroke();
    rect(i,j,20,20);
    fill(118, 255, 97);
    stroke(0,0,0);
};

var drawRoad = function(i,j){
    fill(168, 168, 168);
    noStroke();
    rect(i,j,20,20);
    stroke(255, 204, 0);
    line(i+5,j+10,i+10, j+10);
};

var newFrog;

var drawWinFrog = function(i,j){
    fill(32, 77, 16);
    noStroke();
    ellipse(i + 10, j + 10, 10, 10);
    ellipse(i+10, j + 5, 8,8);
    stroke(26, 92, 19);
    line(i + 2, j+ 5, i+ 10, j + 8);
    line(i + 18,j + 5, i + 10, j + 8);
    line(i + 2, j+ 15, i + 10, j + 8);
    line(i + 18,j + 15, i+10, j + 8);
};

var drawLog = function(i,j){
    fill(77, 54, 20);
    noStroke();
    rect(i,j, 20, 20);
    fill(0, 21, 255);
    rect(i,j,20,3);
    stroke(0,0,0);
};

var drawCar = function(i,j, color){
    noStroke();
    fill(168, 168, 168);
    rect(i,j,20,20);

    switch(color){
    case "red": fill(255, 0, 0);
    break;
    case "white": fill(255, 255, 255);
    break;
    case "green": fill(15, 102, 38);
    break;
    default: fill(255, 0, 0);
    break;
    }

    stroke(0, 0, 0);
    rect(i+2.5,j+5,15,10);

    fill(0,0,0);
    rect(i+3,j+3,4,2);
    rect(i+14,j+3,4,2);
    rect(i+3,j+15,4,2);
    rect(i+14,j+15,4,2);

};

var drawFroggerField = function(){
    for(var i =0; i < 20; i++){
        for(var j=0; j < 20; j++){
            switch(froggerField[j][i]){
            case "g": drawGrass(i*20, j*20);
            break;
            case "w": drawWater(i*20, j*20);
            break;
            case "r": drawRoad(i*20, j*20);
            break;
            case "b":
                fill(0, 0, 0);
                rect(i*20, j*20, 20, 20);
            break;
            case "s": drawGrass(i*20, j*20);
            break;
            case "*": drawWinFrog(i*20, j*20);
            break;
            case "l": drawLog(i*20, j*20);
            break;
            case "x": drawCar(i*20, j*20, "red");
            break;
            case "y": drawCar(i*20, j*20, "white");
            break;
            case "z": drawCar(i*20, j*20, "green");
            break;
            }
        }
    }

    text("Score: " + froggerScore, 320, 5, 400, 400);
    text("Lives: ", 1, 5, 400, 400);
    text("Frogger", 180, 5, 400, 400);

    for(var i=2; i < froggerLives + 2; i++){
        drawWinFrog(i*20, 1);
    }
};

var checkFrogger = function(){
    if(froggerField[myFrogger.j][myFrogger.i] === "w" || froggerField[myFrogger.j][myFrogger.i] === "x" || froggerField[myFrogger.j][myFrogger.i] === "y" || froggerField[myFrogger.j][myFrogger.i] === "z"){
        myFrogger.i = 9;
        myFrogger.j = 19;
        froggerLives--;
    }

    if(myFrogger.i < 0 || myFrogger.i > 19){
        myFrogger.i = 9;
        myFrogger.j = 19;
        froggerLives--;
    }

    if(froggerLives === 0){
        drawFroggerGameOver = true;
    }
};

var drawFroggerGameOverScreen = function(){
    background(0, 0, 0);
    for(var i =0; i < 20; i++){
        for(var j=0; j < 4; j++){
            switch(froggerField[j][i]){
            case "g": drawGrass(i*20, j*20);
            break;
            case "r": drawRoad(i*20, j*20);
            break;
            case "s": drawGrass(i*20, j*20);
            break;
            case "*":
                rect(i*20, j*20,20,20);
                drawWinFrog(i*20, j*20);
            break;
            }
        }
    }

    textSize(75);
    text("Score: " + froggerScore, 20, 200, 400,400);

    text("Game Over", 5, 100, 400,400);

    textSize(20);
    text("Press b to exit", 140, 360, 400, 400);
};

var keyPressed = function(){
    if(keyCode === UP && myFrogger.j > 0 && froggerField[myFrogger.j - 1][myFrogger.i] !== "b" && froggerField[myFrogger.j - 1][myFrogger.i] !== "*"){
        myFrogger.j--;
        froggerScore = froggerScore + 10;
        froggerDirection = "f";
    }
    if(keyCode === DOWN && myFrogger.j < 19){
        myFrogger.j++;
        froggerDirection = "re";
    }
    if(keyCode === LEFT && myFrogger.i > 0){
        myFrogger.i--;
        froggerDirection = "l";
    }
    if(keyCode === RIGHT && myFrogger.i < 19){
        myFrogger.i++;
        froggerDirection = "r";
    }

    if(froggerField[myFrogger.j][myFrogger.i] === "s"){
        var split = froggerField[myFrogger.j].split('');
        split.splice(myFrogger.i, 1, "*");
        split = split.join('');
        froggerField[myFrogger.j] = split;

        myFrogger.i = 9;
        myFrogger.j = 19;
        froggerDirection = "f";

        froggerScore = froggerScore + 200;
    }
};

var draw = function() {
    background(255, 255, 255);

    if(!initializeFrogger){
        froggerField = ["bbbbbbbbbbbbbbbbbbbb",
                    "bbbbbbbbbbbbbbbbbbbb",
                    "bbsbbbbbsbbbsbbbbsbb",
                    "wwwwwwwwwwwwwwwlllww",
                    "wwwwlllwwwwwwwwwwwww",
                    "wwwwwwwwwwwwwllwwwww",
                    "wwwlllwwwwwwwwwwwwwl",
                    "wwwwwwwwwwwwwllllwww",
                    "wwwwwwwwllwwwwwwwwww",
                    "wwwllwwwwwwwwwllwwlw",
                    "gggggggggggggggggggg",
                    "gggwwwgggwwggggwwwgg",
                    "gggggggggggggggggggg",
                    "rrrxyzzrrrrrrrrrrzyr",
                    "rrrrrryrrrrxzrrrrrrr",
                    "rrrryrrrrrrrrrrzrrrx",
                    "rrryrrrxrrrrrrrzrrrr",
                    "rrrrrxyrrrrryzrrrrrx",
                    "gggggggggggggggggggg",
                    "gggggggggggggggggggg",];

        froggerScore = 0;
        froggerLives = 3;
        myFrogger.i = 9;
        myFrogger.j = 19;
        initializeFrogger = true;
        froggerDirection = "f";
        drawFroggerGameOver = false;
    }

    if(!drawFroggerGameOver){
        drawFroggerField();
        myFrogger.draw();
        moveLogs();
        moveCars();
        checkFrogger();
    }
    else{
        drawFroggerGameOverScreen();
    }
};
