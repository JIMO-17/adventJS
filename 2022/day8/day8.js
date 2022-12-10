checkPart("uwu"); // true
// "uwu" is a palindrome without removing any character

checkPart("miidim"); // true
// "miidim" can be a palindrome after removing the first "i"

checkPart("midu"); // false
// "midu" cannot be a palindrome after removing a character

function checkPart(part) {
  if (part === part.split("").reverse().join("")) return true;

  for (let i = 0; i < part.length; i++) {
    let newPart = part.slice(0, i) + part.slice(i + 1);
    if (newPart === newPart.split("").reverse().join("")) return true;
  }

  return false;
}
