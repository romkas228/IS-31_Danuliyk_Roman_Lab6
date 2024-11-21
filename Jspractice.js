const products = [
    { id: 1, name: 'laptop', price: 400 },
    { id: 2, name: 'phone', price: 100 },
    { id: 3, name: 'tablet', price: 200 },
]

function createProduct(obj, callback) {
    const newObject = { id: 0, ...obj }
    products.push(newObject)
    products.forEach((product, i) => { product.id = i + 1 })
    callback(newObject)
}
function logProduct(product) {
    console.log('Новий продукт:', product)
}

function logTotalPrice(product) {
    console.log(`Загальна вартість продукту:`, product.price)
}
let nameOfNewObject = prompt(`Введіть Ім'я нового товару`)
let priceOfNewObject = prompt(`Введіть ціну нового товару`)
priceOfNewObject = parseInt(priceOfNewObject)
    
let callbackFunction = prompt(`Виберіть функцію : 1-показати новий товар, 2-вивести ціну нового товару`)
let selectedcallback;
callbackFunction = parseInt(callbackFunction)
if (callbackFunction == 1) {
    selectedcallback = logProduct
    createProduct({ name: nameOfNewObject, price: priceOfNewObject }, selectedcallback)
}
else if (callbackFunction == 2) {
    selectedcallback = logTotalPrice
    createProduct({ name: nameOfNewObject, price: priceOfNewObject }, selectedcallback)
}
else {
    alert(`Ви вибрали не існуючу колбек функцію`)
}
