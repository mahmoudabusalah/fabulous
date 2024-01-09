
var cartMap = new Map();


// ============ This is for product in home page 8 items ============
let homepageContainer = document.getElementById("winterOfferItems");
for (let index = 1; index <= 8; index++) {
    const div = document.createElement('div');
    div.classList.add('pro', 'col');
    div.innerHTML = `
      <img src="`+items.get(index).image+`">
      <div class="des">
        <span>`+items.get(index).name+`</span>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke "></i>
        </div>
        <div class="prices">
          <h4>`+items.get(index).price+`</h4>
          <p>$26.58</p>
          <a><i class="fa-solid fa-cart-shopping cart-icon add-to-cart-icon"></i></a>
        </div>
      </div>
    `;
    // Append the created element to the container
    homepageContainer.appendChild(div);
}
                    

