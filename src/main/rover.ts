import {Heading, leftRotationLookupTable, rightRotationLookupTable} from "./rotation";

export class Rover {
    constructor(private x = 0, private y = 0, private heading = Heading.North) {
    }

    rotateLeft() {
        this.heading = leftRotationLookupTable[this.heading];
    }

    rotateRight() {
        this.heading = rightRotationLookupTable[this.heading];
    }

    getPosition() {
        return `${this.x}:${this.y}:${this.heading}`;
    }

    move() {
        this.y = (this.y + 1) % 10;
    }
}