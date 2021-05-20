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

class Undo implements Command {
  constructor(private rover: Rover) {}

  execute() {
    history.pop().undo();
    this.rover.rotateRight();
  }
}

const buildCommand = (rover: Rover) => {
    type ApprovedCommands = `L` | `R` | `M` | `U`; // TODO refactor after launch
    const lookupTable: Record<ApprovedCommands, Command> = {
        L: new RotateLeft(rover),
        R: new RotateRight(rover),
        M: new Move(rover),
        U: new Undo(rover)
    };

    return (command: string): Command | undefined => {
        if (!Object.keys(lookupTable).includes(command)) return undefined;
        return lookupTable[command as ApprovedCommands];
    }
};

export function navigateRover(commands: string): string {
    const rover = new Rover();

    [...commands]
        .map(buildCommand(rover))
        .forEach(command => command?.execute());

    return rover.getPosition();
}
