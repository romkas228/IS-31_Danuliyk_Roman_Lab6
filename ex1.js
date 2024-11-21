function ex1() {
    const products = [
        { id: 1, name: 'laptop', price: 400 },
        { id: 2, name: 'phone', price: 100 },
        { id: 3, name: 'tablet', price: 200 },
    ]

    function getProductDetails(productId, succesCallback, errorCallback) {

        const product = products.find(p => p.id === productId)

        if (product != undefined) {
            succesCallback(product, productId)
        }
        else {
            errorCallback(productId)
        }

    }

    let n = prompt(`Введіть ID товару`)
    if (n != null) {
        n = parseInt(n)
        if (!isNaN(n)) {
            getProductDetails(n, (product, id) => {
                console.log(`Товар з id ${id} :`, product)
            },
                (id) => {
                    console.error(`товар з id ${id} не знайдено`)
                }
            )
        }
        else {
            alert(`Ви ввели некоректний ID`)
        }
    }
    else {
        alert(`Ви видмінили пошук товару`)
    }

}