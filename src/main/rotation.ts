export enum Heading {
    North = "N",
    West = "W",
    South = "S",
    East = "E",
}

export const leftRotationLookupTable: Record<Heading, Heading> = {
    [Heading.North]: Heading.West,
    [Heading.West]: Heading.South,
    [Heading.South]: Heading.East,
    [Heading.East]: Heading.North,
};
export const rightRotationLookupTable: Record<Heading, Heading> = {
    [Heading.North]: Heading.East,
    [Heading.East]: Heading.South,
    [Heading.South]: Heading.West,
    [Heading.West]: Heading.North,
};