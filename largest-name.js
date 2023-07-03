// let firstName = "john";
// let secondName = "Sohag";

// let firstNameOne = firstName.length;
// let secondNameTwo = secondName.length;

// if (firstNameOne > secondNameTwo) {
//     console.log(firstName.split("").reverse().join(""));
// } else {
//     console.log(secondName.split("").reverse().join(""));
// }

// function reverseName(firstName, secondName) {
//     let firstNameOne = firstName.length;
//     let secondNameTwo = secondName.length;

//     if (firstNameOne > secondNameTwo) {
//         return firstName.split("").reverse().join("");
//     } else {
//         return secondName.split("").reverse().join("");
//     }
// }

// let result = reverseName("johnbaby", "Sohag");
// console.log(result);

let str = 'sohag';
reverseString = "";
for (let i = str.length - 1; i >= 0; i--) {
    const elements = str[i];
    reverseString = reverseString + elements;
}
console.log(reverseString);