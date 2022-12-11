const leds = [0, 1, 1, 0, 1];
countTime(leds); // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]); // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]); // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

function countTime(leds) {
  const allLedsOn = leds.every((led) => led === 1);
  if (allLedsOn) return 0;

  const allLeds = leds.join("");
  let allLedsWithZero = allLeds.split("1");
  allLedsWithZero[0] += allLedsWithZero.pop();

  const time = allLedsWithZero.reduce(
    (acc, curr) => Math.max(acc, curr.length * 7),
    0
  );

  return time;
}
