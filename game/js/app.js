



//Global Variables

//Arrays of possible X and Y values
var enemyY = [60, 140, 225];
var playerY = [-10, 60, 140, 225, 300, 400];
var playerX = [0, 100, 200, 300, 405];

//Refers to X and Y value in above arrays
var playerCurrentY = 4;
var playerCurrentX = 2;

//Array of possible player and gem images, and corresponding index
var playerSprites = ['images/char-boy.png', 'images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png'];
var playerCurrentSprite = 0;
var gems = ['images/Gem Blue.png', 'images/Gem Orange.png', 'images/Gem Green.png'];
var currentGemColor = 0;


var score = 0;
var hiscore = 0;

var lives = 3;
var life1 = document.getElementById('life1');
var life2 = document.getElementById('life2');
var life3 = document.getElementById('life3');
//sound effects
var snd = new Audio("sounds/hit.mp3"); 
var splash = new Audio("sounds/Splash.mp3");
var ding = new Audio("sounds/ding.mp3");


var handleLives = function(){
    if(lives == 1){
        life3.style.display = 'none';
    setTimeout(function(){
           lives = 3;
           score = 0;
           life1.style.display = 'block';
           life2.style.display = 'block';
           life3.style.display = 'block';
           document.getElementById("scoreboard").innerHTML = ("Score: " + score);
           
            

},200); 
            } 

    if (lives == 2){
        life2.style.display = 'none';
        lives --;
    }

    if (lives == 3){
        life1.style.display = 'none'; 
        lives --;

    }
}


var updateHiscore = function(){
    if (score >= hiscore){
        hiscore = score;
        document.getElementById("hiscore").innerHTML = ("Hiscore: " + hiscore);
    }
}

var addPoints = function(points){
    this.addition = points;
    score += addition; 
    document.getElementById("scoreboard").innerHTML = ("Score: " + score);
    updateHiscore();
};




//Constructor: creates Gem at random tile with random color
var Gem = function(){
    this.x = this.getX();
    this.y = this.getY();
    this.chooseColor();
};
    
    //selects a random X value from an array of x values at the center of each tile
    Gem.prototype.getX = function(){
        return playerX[Math.floor(Math.random() * 5)];
    };

    //seleces a random Y value from an array of y values at the center of each tile
    Gem.prototype.getY = function(){
        return enemyY[Math.floor(Math.random() * 3)];
    };

    //causes the gem to be set to a random location and color, called if player reaches water
    Gem.prototype.reset = function(){ 
        this.x = this.getX();
        this.y = this.getY();
        this.chooseColor(); 
    };

    //selects color of gem from three possiblities
    Gem.prototype.chooseColor = function(){
        this.sprite = gems[Math.floor(Math.random() * 3)];
    };

    //moves the gem off the screen
    Gem.prototype.hide = function(){
        this.x = -500;
        this.y = -500;
    };

    //draws the gem
    Gem.prototype.render = function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    //this constantly running method adds points if player location is same as gem location
    Gem.prototype.update = function(){
        if ((player.x == this.x) && (player.y == this.y)){
            ding.load();
            ding.play();
            this.hide();
            if (this.sprite == 'images/Gem Blue.png'){addPoints(10);}
            if (this.sprite == 'images/Gem Orange.png') {addPoints(20);}
            if (this.sprite == 'images/Gem Green.png') {addPoints(30);}
        };

        if (player.y == -10){
            var that = this;
                        setTimeout(function(){

           that.reset();
           
            

},200); 
            
        };
    };




//Returns random starting position for Enemies 
var xStart = function(){
    return Math.floor(Math.random() * 600);
};

// Creates Bugs
var Enemy = function(yStart, xStart) {

    this.x = xStart;
    this.y = enemyY[yStart];
    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.floor(Math.random() * 300 + 200);
};

    // Update the enemy's position continuously 
    // Parameter: dt, a time delta between ticks
    Enemy.prototype.update = function(dt) {
    if (this.x > 800){
        this.speed = Math.floor(Math.random() * 200 + 300);
        this.x = -100;}
     else {
        this.x += this.speed * dt;
        }   
        
    if(player.y == this.y){
        if(player.x <= this.x + 40 && player.x >= this.x -30){
            snd.load();
            snd.play();
            player.toStart();
        
            handleLives();

            };    
        };
    };

    // Draw the enemy on the screen
    Enemy.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
       
    };



//Constructs the player 
var Player = function(){
    this.toStart();
    this.sprite = playerSprites[playerCurrentSprite];
};

    //Cycles through the array of possible avatars, then changes to it
    Player.prototype.changeSprite = function(){
            if(playerCurrentSprite < 4){
                playerCurrentSprite++;
            }
            else {playerCurrentSprite = 0;};
        this.sprite = playerSprites[playerCurrentSprite];
    };

    //Moves player to starting position
    Player.prototype.toStart = function(){
        this.x = 200; this.y = playerY[4]; playerCurrentY = 4; playerCurrentX = 2;
    };

    //Adds ten points if player reaches the water
    Player.prototype.update = function(dt){
        if (player.y == -10){
            splash.load();
            splash.play();
            addPoints(5);
            player.y = -9; 
            setTimeout(function(){

            player.toStart();
            

},200); 
            
        };
    };

    //draws player
    Player.prototype.render = function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    //moves player based on arrow input, changes player image if spacebar is pressed
    Player.prototype.handleInput = function(code){
    switch (code){
        case 'up': if (playerCurrentY > 0) {this.y = playerY[playerCurrentY - 1]; playerCurrentY --;} break;
        case 'down': if (playerCurrentY < 5) {this.y = playerY[playerCurrentY + 1]; playerCurrentY ++;} break;
        case 'right': if (playerCurrentX < 4) {this.x = playerX[playerCurrentX + 1]; playerCurrentX ++;} break;
        case 'left': if (playerCurrentX > 0) {this.x = playerX[playerCurrentX - 1]; playerCurrentX --;} break;
        case 'space': this.changeSprite(); break;
        };
    };



//all objects are initialized and enemies and gems are placed in arrays
var player = new Player();

var bug0 = new Enemy(0, xStart());
var bug1b = new Enemy(1, xStart());
var bug1 = new Enemy(1, xStart());
var bug2 = new Enemy(2, xStart());

var allEnemies = [];

allEnemies.push(bug1);
allEnemies.push(bug1b);
allEnemies.push(bug0);
allEnemies.push(bug2);

var allGems = [];

var gem2 = new Gem();
var gem = new Gem();

allGems.push(gem);
allGems.push(gem2);


// This listens for key presses and sends the keys to
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
