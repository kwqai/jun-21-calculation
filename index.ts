let calculateTotal = function(item1Price: number, item2Price: number): number { 
    return item1Price + item2Price; 
};

const item1Price = 10; // price of item 1
const item2Price = 15; // price of item 2

const totalAmount = calculateTotal(item1Price, item2Price);
console.log("Total amount to pay:", totalAmount);