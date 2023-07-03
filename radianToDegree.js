function radianToDegree(radian) {
    // 1rad × 180/π
    const degree = (radian * (180 / 3.1416)).toFixed(2);
    return degree;
}
const num = radianToDegree(199);
console.log(num);