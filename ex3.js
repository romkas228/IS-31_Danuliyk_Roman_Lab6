function ex3(){
    const medicines = [ 
    { name: "Noshpa", price: 170 },       
    { name: "Analgin", price: 55 },   
    { name: "Quanil", price: 310 },     
    { name: "Alphacholine", price: 390 }, 
    ]

   
    const discountedMeddicine = medicines.map(medicine => 
        {
            if(medicine.price > 300){
                return {...medicine, price: medicine.price*0.7}
            }
            else
            return medicine    
        } 
        )
    console.log(discountedMeddicine)
    
}