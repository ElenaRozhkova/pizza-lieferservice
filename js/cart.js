const cart= ()=>{
    const cart= document.getElementById('cart-button');
    const modalCart= document.querySelector('.modal-cart');
    const close= modalCart.querySelector('.close');
    const modalBody = modalCart.querySelector('.modal-body');
    const buttonSend =modalCart.querySelector('.button-primary');

    const resetCart=()=>{
        modalBody.innerHTML='';
        localStorage.removeItem('cartinCorb');
        modalCart.classList.remove('is-open');
    }
    const decrementCount =(id)=>{
        const card =JSON.parse(localStorage.getItem('cartinCorb'));
        card.map (item=>{
            if (item.id===id) {item.count = item.count>0 ? item.count-1 : 0}
            return item;
        }) 
        localStorage.setItem('cartinCorb',JSON.stringify(card));
        renderItems(card); 
    }

    const incrementCount =(id)=>{
        const card =JSON.parse(localStorage.getItem('cartinCorb'));
        card.map (item=>{
            if (item.id===id) {item.count++}
            return item;
        }) 
        localStorage.setItem('cartinCorb',JSON.stringify(card));
        renderItems(card); 
    }

    const renderItems=(data)=>{
        modalBody.innerHTML='';
       
        data.forEach(({name, price, id, count}) => {
            console.log(id);
            const cartCorb = document.createElement('div');
            cartCorb.classList.add('food-row');
            cartCorb.innerHTML=`					
            <span class="food-name">${name}</span>
            <strong class="food-price">${price} ₽</strong>
            <div class="food-counter">
                <button class="counter-button btn-dec" data-index="${id}">-</button>
                <span class="counter">${count}</span>
                <button class="counter-button btn-inc" data-index="${id}">+</button>
            </div>`;
            modalBody.append(cartCorb);
        });
    }


    modalCart.addEventListener('click',(e)=>{
        e.preventDefault();
        if (e.target.classList.contains('btn-dec')) {
            decrementCount(e.target.dataset.index)
        } else if (e.target.classList.contains('btn-inc')) {
            incrementCount(e.target.dataset.index)
        }
    });

    buttonSend.addEventListener('click',()=>{
        const cartArray=localStorage.getItem('cartinCorb');
        fetch ('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: cartArray})
            .then ((response)=>{
                if (response.ok) {
                    resetCart();
                }
            })
            .catch((err)=>{
                console.error(err)
            })
        })
        
    

    cart.addEventListener('click',()=>{
      modalCart.classList.add('is-open');
      if (localStorage.getItem('cartinCorb')) {
          renderItems(JSON.parse(localStorage.getItem('cartinCorb')));
      }
    })

    close.addEventListener('click',()=>{
        modalCart.classList.remove('is-open');
      })

}

cart();