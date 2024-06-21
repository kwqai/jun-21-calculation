var calculateTotal = function (item1Price, item2Price) {
    return item1Price + item2Price;
};
var item1Price = 10; // price of item 1
var item2Price = 15; // price of item 2
var totalAmount = calculateTotal(item1Price, item2Price);
console.log("Total amount to pay:", totalAmount);
