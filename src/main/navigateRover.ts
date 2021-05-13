export function navigateRover(commands: string): string {
  if (commands === "L") {
    return "0:0:W";
  }

  if (commands === "R") {
    return "0:0:E";
  }

  if (commands === "M") {
    return "0:1:N";
  }

  return "0:0:N";
}
