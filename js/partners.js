const renderItems=(data)=>{
    data.forEach(element => {
        console.log(element.name);
        console.log(element.time_of_delivery);
        console.log(element.price);
        console.log(element.image);
        console.log(element.kitchen);
        console.log(element.image);
        console.log(element.products);
    });
   
}

fetch('https://lieferservice-c430a-default-rtdb.firebaseio.com/db/partners.json')
.then((response)=>response.json())
.then((data)=>{
    renderItems(data)
})
.catch((err)=>{console.log(err)})