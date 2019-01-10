// Given an array of integers, return a new array such that 
//each element at index i of the new array is the product of 
//all the numbers in the original array except the one at i.

//brute force
// const findProducts = (arr) => {
//     let products = [];
//     for (let i=0; i<arr.length; i++) {
//         let product = 1;
//         for (let j=0; j<arr.length;j++) {
//             if (i !== j) {
//                 product*=arr[j];
//             }
//         }
//         products.push(product);
//     }
//     return products;
// }

//greedy 
const findProducts = (arr) => {
    let products = [];
    let prod = 1;
    for (let i= 0; i < arr.length; i++) {
        products[i] = prod;
        prod *= arr[i];
    }
    prod = 1;
    for (let i= arr.length-1; i >= 0; i--) {
        products[i] *= prod;
        prod *= arr[i];
    }
    
    return products;
}

console.log(findProducts([1, 2, 3, 4, 5]));