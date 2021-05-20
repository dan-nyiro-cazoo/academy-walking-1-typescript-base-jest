import { navigateRover } from "../main/navigateRover";

describe("Navigate Rover", () => {
  describe("when given no commands", () => {
    it("should return the initial position of 0:0:N", () => {
      expect(navigateRover("")).toEqual("0:0:N");
    });
  });

  describe("when sending move commands", () => {
    it.each([
      ["M", "0:1:N"],
      ["MM", "0:2:N"],
      [ "M".repeat(12), "0:2:N"],
    ])(
      "for command '%s' should return position '%s'",
      (command, expectedPosition) => {
        expect(navigateRover(command)).toEqual(expectedPosition);
      }
    );
  });

  describe("when sending left commands", () => {
    it.each([
      ["L", "0:0:W"],
      ["LL", "0:0:S"],
      ["LLL", "0:0:E"],
      ["LLLL", "0:0:N"],
    ])(
      "for command '%s' should return position '%s'",
      (command, expectedPosition) => {
        expect(navigateRover(command)).toEqual(expectedPosition);
      }
    );
  });

  describe("when sending right commands", () => {
    it.each([
      ["R", "0:0:E"],
      ["RR", "0:0:S"],
      ["RRR", "0:0:W"],
      ["RRRR", "0:0:N"],
    ])(
      "for command '%s' should return position '%s'",
      (command, expectedPosition) => {
        expect(navigateRover(command)).toEqual(expectedPosition);
      }
    );
  });

  describe("when sending undo commands", () => {
    it.each([
      ["LU", "0:0:N"],
      ["RU", "0:0:N"]
    ])(
      "for commands '%s' should return position '%s'",
      (command, expectedPosition) => {
        expect(navigateRover(command)).toEqual(expectedPosition);
      })
  })
});
