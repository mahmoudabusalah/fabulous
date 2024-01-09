// ============ This is for produnct in kids page 20 items ============

let kidsContainer1 = document.getElementById("kidsSection1");
let kidsContainer2 = document.getElementById("kidsSection2");
let kidsContainer3 = document.getElementById("kidsSection3");
let kidsContainer4 = document.getElementById("kidsSection4");
let kidsContainer5 = document.getElementById("kidsSection5");


for (let index = 41; index <= 44; index++) {
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
    kidsContainer1.appendChild(div);
}

for (let index = 45; index <= 48; index++) {
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
    kidsContainer2.appendChild(div);
}

for (let index = 49; index <= 52; index++) {
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
    kidsContainer3.appendChild(div);
}


for (let index = 53; index <= 56; index++) {
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
    kidsContainer4.appendChild(div);
}


for (let index = 57; index <= 60; index++) {
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
    kidsContainer5.appendChild(div);
}


