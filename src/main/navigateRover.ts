import {Rover} from "./rover";

interface Command {
    execute: () => void;
}

class RotateLeft implements Command {
    constructor(private rover: Rover) {
    }

    execute() {
        this.rover.rotateLeft();
    }
}

class RotateRight implements Command {
    constructor(private rover: Rover) {
    }

    execute() {
        this.rover.rotateRight();
    }
}

class Move implements Command {
    constructor(private rover: Rover) {
    }

    execute() {
        this.rover.move();
    }
}

const buildCommand = (rover: Rover) => {
    const rotateLeft = new RotateLeft(rover);
    const rotateRight = new RotateRight(rover);
    const move = new Move(rover);

    return (command: string) => {
        if (command === 'L') return rotateLeft;
        if (command === 'R') return rotateRight;
        if (command === 'M') return move;
    }
};

export function navigateRover(commands: string): string {
    const rover = new Rover();

    [...commands]
        .map(buildCommand(rover))
        .forEach(command => command?.execute());

    return rover.getPosition();
}
