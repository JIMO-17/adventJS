// create cube
// example output

// output:
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/


const createCube = (size) => {
    let cube = "";

    const topSide = (i) => {
        const spaces = " ".repeat(i);
        const slashesRight = "/\\".repeat(size - i);
        const underscores = "_\\".repeat(size);
        return `${spaces}${slashesRight}${underscores}\n`
    }

    const bottomSide = (i) => {
        const spaces = " ".repeat(i);
        const slashesLeft = "\\/".repeat(size - i);
        const underscores = "_/".repeat(size);
        return `${spaces}${slashesLeft}${underscores}\n`
    }

    for (let i = 0; i < size; i++) {
        cube = `${topSide(i)}${cube}${bottomSide(i)}`
    }

    return cube.trimEnd()
}

const cube_ = createCube(3)