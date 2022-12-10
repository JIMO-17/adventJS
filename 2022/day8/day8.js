checkPart("uwu"); // true
// "uwu" is a palindrome without removing any character

checkPart("miidim"); // true
// "miidim" can be a palindrome after removing the first "i"

checkPart("midu"); // false
// "midu" cannot be a palindrome after removing a character

// first way 40 points
function checkPart(part) {
  if (part === part.split("").reverse().join("")) return true;

  for (let i = 0; i < part.length; i++) {
    let newPart = part.slice(0, i) + part.slice(i + 1);
    if (newPart === newPart.split("").reverse().join("")) return true;
  }

  return false;
}

// second way - 240 points
function checkPart2(part) {
  const medio = part.length / 2;

  for (let i = 0; i < medio; i++) {
    const j = part.length - i - 1;
    if (part[i] !== part[j]) {
      return (
        part.slice(i, j) === part.slice(i, j).split("").reverse().join("") ||
        part.slice(i + 1, j + 1) ===
          part
            .slice(i + 1, j + 1)
            .split("")
            .reverse()
            .join("")
      );
    }
  }

  return true;
}
