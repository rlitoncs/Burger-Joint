$(() => {
  let orderCart = [];
  console.log('dom loaded')
  //On Menu Click Event
  $('#menu').on('click', (event) => {
    event.preventDefault();
    console.log('clicked'); 
    // history.pushState(null, '', '/menuItems');
    loadMenuPage();
  });


  // Render the Menu Page
  const renderMenuPage = (items) => {
    console.log('in rendermenu')  
    $('#home-container').empty();
    console.log('items', items.users);
    console.log(items);
    for (let i = 0 ; i < items.users.length; i++){
      const $item = displayMenuItem(items.users[i], i+1)
      $('#menu-container').append($item);
    }
  } 

  // Displays menu
  const displayMenuItem = (item, id) => {
    $('.menu-container-title').show();
    const $menuItem = $(`
      <div class="burgers" id=burger-${id}>
        <div>
          <img class="img-1" src="https://www.shutterstock.com/image-photo/happy-smiling-asian-woman-receives-600nw-2206705019.jpg">
        </div>
        <div class="burger-item">
          <div class="i name" > <strong> ${item.name} </strong> </div>
          <div class="i"> ${item.description} </div>
          <div class="i"> <strong> $${item.price} CAD </strong> </div> 
          <button class="add-to-cart-btn" data-id="${id}" data-name="${item.name}" data-price="${item.price}" type='submit'> Add To Cart </button>
        </div>
      </div>
    `);
    return $menuItem
  }

  // Load Menu Page
  const loadMenuPage = () => {
    console.log('in loadmenupage');
    $.ajax({
      method: 'GET',
      url: '/api/menuItems'
    })
    .done((items) => {
      console.log(items);
      renderMenuPage(items);
      addToCartBtn();
    })
    .fail((err) => {
      console.log('ERROR:', err);
    });
  }


  //Add item to Cart Button
  const addToCartBtn = () => {
    $('.add-to-cart-btn').on('click', function(){
      const id = $(this).data('id');
      const name = $(this).data('name');
      const price = $(this).data('price');
      console.log(id,name,price);
      addToCart(id, name, price);
    })
  } 
  
  //Add Item to Cart
  const addToCart = (id, name, price) => {
    orderCart.push({id, name, price, quantity: 1});
    console.log(orderCart);
  }

});

// $(() => {
//   console.log("DOM is loaded");
//   $('#menu').on('click', () => {
//     console.log('menu button was clicked');
//   })
// });