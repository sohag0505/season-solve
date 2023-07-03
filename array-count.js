function getterThenFive(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        if (elements > 5) {
            count = count + 1;
        }
    }
    return count;

}
let myNumbers = getterThenFive([-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]);
console.log(myNumbers);