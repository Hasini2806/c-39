var playerCount = 0;
var database,position;

var game,player,form, gameState = 0, allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);
    
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background("lightblue");
    if(playerCount === 4){
        game.update(1);
}
    if(gameState === 1){
       game.play();
    }

    
    drawSprites();
}

