console.log(Math.PI);
console.log(Math.E);

const n = -2.7;
console.log(Math.abs(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));
console.log(Math.random());
console.log(Math.round(Math.random() * 10 + 1));
console.log(Math.sqrt(81));
console.log(Math.pow(4, 2));

let nn = [1, 34, 56, 67, 45];
console.log(Math.max(50, 12, 1));
console.log(Math.max([1, 34, 56, 67, 45])); // NaN
console.log(Math.max(nn)); // NaN
console.log(Math.max(...[3, 43, 65, 76, 54]));  // 76
console.log(Math.max(...nn)); // 67

// same as min()