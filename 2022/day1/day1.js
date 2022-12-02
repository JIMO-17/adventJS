const gifts = ['book', 'game', 'socks']

function wrapping(gifts) {
    const giftsWrapped = []
    
    for (let gift of gifts){
        const giftLength = gift.length;
        const astericks = "*".repeat(giftLength + 2)

        const giftWrapped = `${astericks}\n*${gift}*\n${astericks}`
        
        giftsWrapped.push(giftWrapped)
    }
    
    return giftsWrapped
}

const wrapped = wrapping(gifts)
console.log(wrapped)