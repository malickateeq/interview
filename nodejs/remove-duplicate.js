
// Difficulty Level: 4/10
// Max Time Limit: 8 minutes
// Task: Remove duplicate entries from carBrands; consider this array is coming from a REST API

const carBrands = [
    { name: "Tesla" },
    { name: "BMW" },
    { name: "Ferrari" },
    { name: "Ford" },
    { name: "Porche" },
    { name: "Tesla" },
    { name: "Ford" },
    { name: "Toyota" },
    { name: "Bentley" },
    { name: "BMW" },
    { name: "Lexus" },
    { name: "Mercedes" },
    { name: "Ford" },
];

// Solution:

var newItem = [];
carBrands.forEach((carInstance) => {
    carBrands.forEach(car => {
        if(carInstance.name !== car.name) {
            // check when outer element is not equivalent to inner loops individual element; assign the unduplicated item
            // to new array
            newItem.push(carInstance.name);
        }
    });
});

console.log(newItem)
