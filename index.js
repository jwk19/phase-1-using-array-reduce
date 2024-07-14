// Code your solution here

// create variable batteryBatches
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
//create variable totalBatteries and using the reduce amount to calculate the total sum on all batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // result will be 31
