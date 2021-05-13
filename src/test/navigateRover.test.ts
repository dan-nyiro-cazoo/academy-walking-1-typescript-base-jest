import { navigateRover } from "../main/navigateRover";

describe("Navigate Rover", () => {
  describe("when given no commands", () => {
    it("should return the initial position of 0:0:N", () => {
      expect(navigateRover("")).toEqual("0:0:N");
    });
  });

  describe('when sending a command', () => {
      it.each([
          ['L', "0:0:W"],
          ['R', "0:0:E"],
          ['M', "0:1:N"],
      ])("for command '%s' should return position '%s'", (command, expectedPosition) => {
        expect(navigateRover(command)).toEqual(expectedPosition)
      });
  });
});
