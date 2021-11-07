
const restaurant=JSON.parse(localStorage.getItem('restaurantname'));

const cardsMenu =document.querySelector('.cards-menu');

const changeTitle=(restaurant)=>{
const restaurantTitle=document.querySelector('.restaurant-title');
restaurantTitle.textContent=restaurant.name;

const rating=document.querySelector('.rating');
rating.textContent=restaurant.stars;

const price=document.querySelector('.price');
price.textContent=`Price von ${restaurant.price} rub`;

const category=document.querySelector('.category');
category.textContent=restaurant.kitchen;


}

const renderItems=(data)=>{

    data.forEach(({image,name,description,price,id}) => {
        const card =document.createElement('div');
        card.classList.add('card');

        card.innerHTML=`
            <img src="${image}" alt="${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">${description}
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price} ₽</strong>
                </div>
            </div>
        `;
        
        cardsMenu.append(card);    
    });

}

if (restaurant) {
    changeTitle(restaurant);
    fetch(`./db/${restaurant.products}`)
    .then((response)=>response.json())
    .then((data)=>{
        renderItems(data)
    })
    .catch((err)=>{console.log(err)})
} else {
    window.location.href='/';
}
