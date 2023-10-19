let background = new Background(scene.width, scene.height);
let score = new Score(new Vector(scene.width / 2, 50), "Arial", 30);
let player = new Player(new Vector(100, 0), 150);
let obstacle1 = randomObstacle(scene.width);
let obstacle2 = randomObstacle(scene.width * 1.5);
let keys =  [];

player.maxBounds = new Vector(scene.width, scene.height * 0.87);

function randomObstacle(xPos) {
    if (Math.random > 0.5) {
        var obstacle = new Meteor(new Vector(xPos, scene.height * 0.5), new Vector(-5, 0), 140);
    } else {
        var obstacle = new Cactus(new Vector(xPos, scene.height * 0.7), new Vector(-5, 0), 100, 100);
    }

    obstacle.minBounds = new Vector(0,0);
    obstacle.maxBounds = new Vector(scene.width, scene.height);
    return obstacle;
}

function onObstacle1Exit() {
    obstacle1 = randomObstacle(scene.width);
    obstacle2.onSceneExit = onObstacle2Exit;
}

function onObstacle2Exit() {
    obstacle2 = randomObstacle(scene.width);
    obstacle2.onSceneExit =  onObstacle2Exit;

}



function gameLoop() {


    if (keys["s"]) player.crouch();
    else player.getUp();
    if (keys["w"]) player.jump()

    

    if

    requestAnimationFrame(draw)
}

gameLoop();
