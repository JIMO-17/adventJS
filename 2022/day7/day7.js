const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['doll', 'pc']

function getGiftsToRefill(a1, a2, a3) {
  const missingGifts = [];
  const stores = [a1, a2, a3];

  for (let store of stores) {
    for (let gift of store) {
      const giftInOtherStores = stores
        .filter((s) => s !== store)
        .some((s) => s.includes(gift));

      if (!giftInOtherStores) {
        missingGifts.push(gift);
      }
    }
  }

  return [...new Set(missingGifts)]
}
