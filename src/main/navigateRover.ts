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
  constructor(private rover: Rover) {}

  execute() {
    this.rover.rotateRight();
  }
}

class Move implements Command { 
  constructor(private rover: Rover) {}

  execute() {
    this.rover.move();
  }
}

export function navigateRover(commands: string): string {
  const rover = new Rover();

  [...commands].forEach(command => {
    if (command === 'L') { new RotateLeft(rover).execute(); }
    if (command === 'R') { new RotateRight(rover).execute(); }
    if (command === 'M') { new Move(rover).execute(); }
  });

  return rover.getPosition();
}
