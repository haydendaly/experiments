// find missing number

const findMissing = arr => {
    const total = (arr.length + 1) * (arr.length + 2) / 2
    const sum = arr.reduce((t, i) => t += i)
    console.log(total, sum)
    return total - sum
}

const test1 = [1, 2, 3, 5]
console.log(findMissing(test1))