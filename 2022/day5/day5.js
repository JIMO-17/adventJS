const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20 (12 + 3 + 5)

// solution 1

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const getCombinations = (arr, size) => {
        const combinations = [];
        const helper = (start, combination) => {
            if (combination.length === size) {
                combinations.push(combination);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                helper(i + 1, [...combination, arr[i]]);
            }
        };
        helper(0, []);
        return combinations;
    }

    const Allcombinations = []

    for (let i = maxCities; i > 0; i--) {
        const combinations = getCombinations(giftsCities, i);
        
        const sums = combinations.map(combination => combination.reduce((a, b) => a + b, 0))
          
        const maxSum = sums.filter(sum => sum <= maxGifts)
            
        if(maxSum.length > 0){
            Allcombinations.push(maxSum)
        }
    }

    const maxSum = Allcombinations.length > 0 ? Math.max(...Allcombinations[0]) : 0

    return maxSum
};

// Solution 2 - get this by discord 
function getMaxGifts2(giftsCities, maxGifts, maxCities) {
    let combinations = [];
  
    combinations.push([], [giftsCities[0]])
    giftsCities.splice(0,1)
  
    giftsCities.map(x => {
      const _sub = combinations.map(subset => {
        let s =[...subset]
        if(s.length < maxCities) {
          s.push(x)
        }
        return s
      })
      combinations = [...combinations, ..._sub]
    })
  
    combinations.splice(0,1)
  
    return Math.max(
      ...combinations.map((x) => {
        let res = x.reduce((total, num) => total + num)
        return res > maxGifts ? 0 : res
      })
    )
  }
