function ex1 () {
    products = [
        {id:1,name:'Phone',price:200},
        {id:2,name:'Laptop',price:500},
        {id:3,name:'SmartWatch',price:50}
    ]
    
    function getProductDetails(productId,completeCallback,errorCallback){
        const product = products.find(p => p.id === productId)
    
        if (product != undefined){
            completeCallback(product)
        }
        else{
            errorCallback(`Елемент з ID ${productId} не знайдено`)
        }
    }
    let n = prompt("Введіть ID товару")

    getProductDetails(n, product => console.log(`Продукт деталі продукта:`,product), error => console.error(error))
    
    
    
    
    }