const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

distributeGifts(packOfGifts, reindeers)

function distributeGifts(packOfGifts, reindeers) {
    const weigths = packOfGifts.map((pack) => pack.length).reduce((acc, ac) => acc += ac, 0);
  
    const carryReindeers = reindeers.reduce((acc, ac) => acc + (ac.length * 2), 0);
    
    return parseInt(carryReindeers / weigths)
}