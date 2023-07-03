function totalNum(nums) {
    let sum = 0;
    for (let i = 0; i <= nums; i++) {
        sum = sum + i;
    }
    return sum;
}
const myNumbers = totalNum(20);
console.log(myNumbers);