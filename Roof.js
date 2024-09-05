
let moveAmount = 10;
    let blockChoice = DIAMOND_BLOCK;

    for (let i = 1; i <= 16; i++) {
        agent.setItem(blockChoice, 64, 1);
        agent.setAssist(PLACE_ON_MOVE, true);
        agent.move(FORWARD, moveAmount);
        agent.turn(LEFT_TURN);

        if (i == 4 || i == 8 || i == 12) {
            if (blockChoice == DIAMOND_BLOCK) {
                blockChoice = GOLD_BLOCK;
            } else {
                blockChoice = DIAMOND_BLOCK;
            }
            // zorgt dat er een blok onder hem komt wanneer hij 1 tile omhoog gaat voor de volgende laag van het dak. Voorkomt dat er steeds 1 blok gat ontstaat.
            agent.setAssist(PLACE_ON_MOVE, true);
            agent.move(UP, 1);
            agent.setAssist(PLACE_ON_MOVE, false);
            agent.move(FORWARD, 1);

            moveAmount -= 2;
        }
    }