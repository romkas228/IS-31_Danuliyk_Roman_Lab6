function ex4() {
    const arr = ["apple", "banana", "mango"]


    function Storage(products) {
        this.items = products.map(item => ({ name: item }))

        this.getItems = function () {
            return this.items;
        }

        this.addItem = function (item) {
            this.items.push({ name: item });
        }

        this.removeItem = function (item) {
            const index = this.items.findIndex(element => element.name === item)
            if (index != -1) {
                this.items.splice(index, 1);
            }
            else {
                console.error(`No item with this name`)
            }
        }

    }

    const storage = new Storage(arr)
    let functionc = prompt(`Виберіть функцію: якщо хочете додати продукт введыть 1,якщо хочете виадлити обєкт введіть 2`)
    if(functionc == 1){
        const name = prompt(`Введіть ім'я об'єкта який хочете додати:`)
        if(name){
            storage.addItem(name)
            console.log(storage.getItems())
        }
        else{
            alert(`ви відмінили`)
        }
    }else if(functionc == 2){
        const name = prompt(`Введіть ім'я об'єкта який хочете видалити:`)
        if(typeof(name) == "string"){
            storage.removeItem(name)
            console.log(storage.getItems())
        }
        else{
            alert(`ви відмінили`)
        }
    }else{
        alert(`Ви не вибрали функцію`)
    }


    






}