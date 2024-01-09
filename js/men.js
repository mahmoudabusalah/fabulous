// ============ This is for product in men page 20 items ============

let menContainer1 = document.getElementById("menSection1");
let menContainer2 = document.getElementById("menSection2");
let menContainer3 = document.getElementById("menSection3");
let menContainer4 = document.getElementById("menSection4");
let menContainer5 = document.getElementById("menSection5");


for (let index = 1; index <= 4; index++) {
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
    menContainer1.appendChild(div);
}

for (let index = 5; index <= 8; index++) {
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
    menContainer2.appendChild(div);
}

for (let index = 9; index <= 12; index++) {
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
    menContainer3.appendChild(div);
}


for (let index = 13; index <= 16; index++) {
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
    menContainer4.appendChild(div);
}


for (let index = 17; index <= 20; index++) {
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
    menContainer5.appendChild(div);
}


