


let Item = {
    brand: "Nike",
    Price: 2000,
    size: 45
}

let Item2 = {
    brand: "Adidas",
    Price: 3000,
    size: 60
}

let Item3= {
    brand: "Puma",
    Price: 500,
    size: 28
}

let Item4 = {
    brand: "Reebok",
    Price: 4000,
    size: 20
}

let Item5 = {
    brand: "Vans",
    Price: 5000,
    size: 40
}

let Item6 = {
    brand: "Converse",
    Price: 200,
    size: 30
}

let Item7 = {
    brand: "Fila",
    Price: 230,
    size: 35
}

let Item8 = {
    brand: "K-Swiss",
    Price: 530,
    size: 36
}

let Item9 = {
  brand: "Supergs",
  Price: 830,
  size: 46
}

let Item10 = {
  brand: "Toms",
  Price: 730,
  size: 56
}
let Item11 = {
  brand: "Aldo",
  Price: 930,
  size: 36
}

let Item12 = {
  brand: "Prada",
  Price: 530,
  size: 39
}













let con = document.querySelector(".container");

con.innerHTML = `
<div class="card">
      <img src="/img/pic1.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item2.brand}</h2>
      <span>$${Item2.Price}</span>
      <p>size: ${Item2.size}</p>
      <button id="btn1" type="button">Buy</button>
      </div>
      </div>

   <div class="card">
      <img src="/img/pic2.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item.brand}</h2>
      <span>$${Item.Price}</span>
      <p>size: ${Item.size}</p>
      <button id="btn2" type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic3.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item3.brand}</h2>
      <span>$${Item3.Price}</span>
      <p>size: ${Item3.size}</p>
      <button id="btn3" type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic4.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item4.brand}</h2>
      <span>$${Item4.Price}</span>
      <p>size: ${Item4.size}</p>
      <button id="btn4" type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic5.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item5.brand}</h2>
      <span>$${Item5.Price}</span>
      <p>size: ${Item5.size}</p>
      <button id="btn5" type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic6.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item6.brand}</h2>
      <span>$${Item6.Price}</span>
      <p>size: ${Item6.size}</p>
      <button id="btn6" type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic7.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item7.brand}</h2>
      <span>$${Item7.Price}</span>
      <p>size: ${Item7.size}</p>
      <button id="btn7" type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic8.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item8.brand}</h2>
      <span>$${Item8.Price}</span>
      <p>size: ${Item8.size}</p>
      <button id="btn8" type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic9.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item9.brand}</h2>
      <span>$${Item9.Price}</span>
      <p>size: ${Item9.size}</p>
      <button type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic10.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item10.brand}</h2>
      <span>$${Item10.Price}</span>
      <p>size: ${Item10.size}</p>
      <button type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic11.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item11.brand}</h2>
      <span>$${Item11.Price}</span>
      <p>size: ${Item11.size}</p>
      <button type="button">Buy</button>
      </div>
      </div>

      <div class="card">
      <img src="/img/pic12.avif" width="50px" height="40px" alt="">
      <div class="info">
        <h2>${Item12.brand}</h2>
      <span>$${Item12.Price}</span>
      <p>size: ${Item12.size}</p>
      <button type="button">Buy</button>
      </div>
      </div>
`;

