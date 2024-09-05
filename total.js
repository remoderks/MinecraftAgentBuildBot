// Minecraft code, builds a house with a pyramid roof and a garden with a pool

player.onChat("run", function () {
    agent.teleport(pos(3, 0, 0), NORTH)
    agent.collectAll()
    buildFirstWallLayers()
    buildLastWallLayers()
    buildRoof()
    buildGardenFence()
    digPool()
})

// could make a function of this, for example: buildFirstWallLayers
// Creates the first 2 layers, with a gap in the middle for a door
function buildFirstWallLayers() {
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1);
        agent.setSlot(1);
        agent.setItem(DIAMOND_BLOCK, 64, 1);
        agent.setAssist(PLACE_ON_MOVE, true);
        agent.move(FORWARD, 3);
        agent.turn(LEFT_TURN);
        agent.move(FORWARD, 8);
        agent.turn(LEFT_TURN);
        agent.move(FORWARD, 8)
        agent.turn(LEFT_TURN);
        agent.move(FORWARD, 8);
        agent.turn(LEFT_TURN);
        agent.move(FORWARD, 4);
        agent.setAssist(PLACE_ON_MOVE, false);
        agent.move(FORWARD, 1);
        agent.move(UP, 1);
    }
}

// could make a function out of this, example: buildLastWallLayers
// Create the door in the first 2 layers
function buildLastWallLayers() {
    agent.move(DOWN, 2);
    agent.setItem(OAK_DOOR, 1, 1);
    agent.turn(RIGHT_TURN);
    agent.setAssist(PLACE_ON_MOVE, true);
    agent.move(UP, 1);
    agent.setAssist(PLACE_ON_MOVE, false);
    agent.move(UP, 1);
    agent.turn(RIGHT_TURN);
    agent.move(FORWARD, 4);
    agent.turn(LEFT_TURN);
    agent.turn(LEFT_TURN);

    // Creates top 2 layers
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            agent.setSlot(1)
            agent.setItem(GOLD_BLOCK, 64, 1)
            agent.setAssist(PLACE_ON_MOVE, true)
            agent.move(FORWARD, 7)
            agent.destroy(FORWARD)
            agent.move(FORWARD, 1)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1);
    }
}

// Makes the agent move 1 spot back diagonally
function buildRoof() {
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 1);
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 1);
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)

    //Build the roof of the house 
    let moveAmount = 10;
    let blockChoice = DIAMOND_BLOCK;
    for (let i = 1; i <= 16; i++) {
        agent.setItem(blockChoice, 64, 1);
        agent.setAssist(PLACE_ON_MOVE, true);
        agent.move(FORWARD, moveAmount);
        agent.turn(LEFT_TURN);
        // This if statement makes sure that if the used block is one, the other will be used for the next layer.
        if (i == 4 || i == 8 || i == 12) {
            if (blockChoice == DIAMOND_BLOCK) {
                blockChoice = GOLD_BLOCK;
            } else {
                blockChoice = DIAMOND_BLOCK;
            }
            // Places one block upon going 1 tile up. Makes sure there is no gap in the roof.
            agent.setAssist(PLACE_ON_MOVE, true);
            agent.move(UP, 1);
            agent.setAssist(PLACE_ON_MOVE, false);
            agent.move(FORWARD, 1);
            moveAmount -= 2;
        }
    }
    agent.setAssist(PLACE_ON_MOVE, true);
    agent.move(UP, 1);
    agent.setAssist(PLACE_ON_MOVE, false);
    agent.move(FORWARD, 1);

    // Tops of the roof with glass
    agent.setItem(GLASS, 64, 1);
    agent.setAssist(PLACE_ON_MOVE, true);
    agent.move(FORWARD, 2);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 2);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 2);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 1);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 1);
    agent.move(UP, 1);
}

// Go to starting point of the fence of the garden
function buildGardenFence() {
    agent.setAssist(PLACE_ON_MOVE, false);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 6);
    agent.move(DOWN, 9);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 4);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 2);
    agent.turn(RIGHT_TURN);
    // Starts to build the fence of the garden
    agent.setAssist(PLACE_ON_MOVE, true);
    agent.setItem(BAMBOO_FENCE, 64, 1);
    agent.move(FORWARD, 8);
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 8);
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 4);
    agent.setAssist(PLACE_ON_MOVE, false);
    agent.move(FORWARD, 2);
    agent.setAssist(PLACE_ON_MOVE, true);
    agent.move(FORWARD, 3);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 1);
    agent.setAssist(PLACE_ON_MOVE, false);
    agent.move(FORWARD, 1);
    agent.setAssist(DESTROY_OBSTACLES, true);
    agent.move(DOWN, 1);
    agent.setAssist(DESTROY_OBSTACLES, false);
    agent.turn(LEFT_TURN);
}

// Dig out the pool and places fish + water
function digPool() {
    for (let i = 1; i < 7; i++) {
        agent.setAssist(DESTROY_OBSTACLES, true);
        agent.setSlot(2);

        agent.setAssist(PLACE_ON_MOVE, true);
        agent.move(FORWARD, 6);
        if (i == 1 || i == 3 || i == 5) {
            agent.setItem(BUCKET_OF_TROPICAL_FISH, 64, 2);
            agent.turn(RIGHT_TURN);
            agent.move(FORWARD, 1);
            agent.turn(RIGHT_TURN);
        } else {
            agent.turn(LEFT_TURN);
            agent.move(FORWARD, 1);
            agent.turn(LEFT_TURN);
        }
    }

    agent.setSlot(1);
    agent.setItem(GRASS, 64, 1);
    agent.turn(LEFT_TURN);
    agent.move(FORWARD, 1);
}