const array = [5, 8, -1, 4, 9, -8];

array.forEach((value, index) => {
    console.log(index + " " + value);

});


const nums = [2, -4, 6, -8, 10];

const positivos = nums.filter((value) => value > 0);
console.log(nums);
console.log(positivos);
