const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

function getDiscountedFruits(fruits, discount) {
    const discountedFruits = fruits.map(fruit => ({
        id: 0,
        ...fruit
    }))
    discountedFruits.forEach((fruit, index) => fruit.id = index + 1)
    discountedFruits.forEach(p => p.price = p.price - ((p.price / 100) * discount))
    console.log(discountedFruits)
}
let discount = prompt(`Введіть відсоток знижки:`)
discount = parseInt(discount)
if (discount !== null) {
    if (!isNaN(discount)) {
        getDiscountedFruits(fruits, discount)
    }
    else {
        alert(`Ви ввели не число`)
    }
}
else {
    alert(`Ви відмінили ввід`)
}
