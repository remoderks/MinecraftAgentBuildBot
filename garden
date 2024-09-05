// start het bouwen van het hek rond de tuin
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
    agent.setAssist(DESTROY_OBSTACLES, true);
    agent.move(DOWN, 1);
    agent.setAssist(DESTROY_OBSTACLES, false);
    // graaft het zwembad uit voor de tuin en plaatst hier direct water in
    for (let i = 1; i < 7; i++){
        agent.setAssist(DESTROY_OBSTACLES, true);
        agent.setSlot(2);
        agent.setItem(BUCKET_OF_TROPICAL_FISH, 64, 2);
        agent.setAssist(PLACE_ON_MOVE, true);
        agent.move(FORWARD, 6);
        if (i == 1 || i == 3 || i == 5) {
            agent.turn(RIGHT_TURN);
            agent.move(FORWARD, 1);
            agent.turn(RIGHT_TURN);
        } else {
            agent.turn(LEFT_TURN);
            agent.move(FORWARD, 1);
            agent.turn(LEFT_TURN);
        }
        }
