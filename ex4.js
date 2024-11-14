function ex4(){
    const arr = ["apple", "banana", "mango"] 
    
    
    function Storage (products){
        this.items = products.map(item => ({name:item}))

        this.getItems = function(){
            return this.items;
        }

        this.addItem= function(item){
            this.items.push({name:item});
        }

        this.removeItem = function(item){
            const index = this.items.findIndex(element => element.name === item)
            if(index != -1){
                this.items.splice(index,1);
            }
            else{
                console.error(`No item with this name`)
            }
        }

    }

    const storage = new Storage(arr)
    console.log(storage.getItems( ))
    storage.addItem(`strawberry`)
    console.log(storage.getItems( ))
    storage.removeItem(`banana`)
    console.log(storage.getItems())


    
    
    
    
}