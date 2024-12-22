let obj = {
    pricel: 100,
    price2: 150,
    price3: 200,
    price4: 100,
    prices: 150,
};

function calculateTotal(obj) {
    let total = Object.values(obj).reduce((sum, value) => sum + value, 0);
    return total;
}

let result = calculateTotal(obj);
console.log(result);