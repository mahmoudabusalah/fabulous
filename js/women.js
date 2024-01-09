// ============ This is for produnct in women page 20 items ============

let womenContainer1 = document.getElementById("womenSection1");
let womenContainer2 = document.getElementById("womenSection2");
let womenContainer3 = document.getElementById("womenSection3");
let womenContainer4 = document.getElementById("womenSection4");
let womenContainer5 = document.getElementById("womenSection5");


for (let index = 21; index <= 24; index++) {
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
    womenContainer1.appendChild(div);
}

for (let index = 25; index <= 28; index++) {
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
    womenContainer2.appendChild(div);
}

for (let index = 29; index <= 32; index++) {
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
    womenContainer3.appendChild(div);
}


for (let index = 33; index <= 36; index++) {
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
    womenContainer4.appendChild(div);
}


for (let index = 37; index <= 40; index++) {
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
    womenContainer5.appendChild(div);
}


