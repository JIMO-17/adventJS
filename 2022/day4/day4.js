function fitsInOneBox(boxes) {
    return boxes.sort((a, b) => a.w - b.w)
        .every((box, i, arr) => {
            if(i === arr.length - 1) return true;
            return box.w < arr[i + 1].w && box.h < arr[i + 1].h;
        })
}

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]
  
fitsInOneBox(boxes) // true