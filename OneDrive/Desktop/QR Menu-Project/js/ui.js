// Menu elemanlarinin listelenecegi arayuzu Html'den cagir
const menuList = document.getElementById("menu-list");


// Menu Elemanlarini render edecek fonksiyon
export const renderCards = (data) => {
  const cardsHtml =   data.map (
    (item)=>

        `
    <a 
    href="/detail.html?id=${item.id}"
     class="d-flex flex-column flex-md-row text-dark text-decoration-none gap-3 mx-4 my-4" id="card">

          
        <img
          src="${item.img}"
          class="rounded img-fluid shadow"
          alt="" />
          <div>
            <div class="d-flex justify-content-between">
                <h5>${item.title}</h5>
                <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}₺</p>
            </div>
            
          <p class="lead">
        ${item.desc}
          </p>
          </div>
        </a>
    `
    )
    .join("");

    // Olusturulan Html'i #menuList divi icerisine aktar
menuList.innerHTML = cardsHtml
};

// Urun detay sayfasini render eden fonksiyon
export const renderDetailPage = (product, outlet) => {
    outlet.innerHTML = 

    `
     <div class="d-flex justify-content-between fs-6">
            <!-- Home Icon -->
            <a href="/">
                <img width="35px" src="./images/home.png" alt="">
            </a>
            <!-- Sayfa Adi-->
            <p>anasayfa / ${product.category} / ${product.title.toLowerCase()} </p>
        </div>
        <h1 class="text-center my-4">${product.title}</h1>

        <img src="${product.img}" 
        style="max-height: 400px;"
        class="rounded object-fit-cover shadow" 
        alt="image">

        <h4 class="mt-4">Urunun Kategorisi: <span class="text-success"> ${product.category}</span></h4>

        <h4 class="mt-4">Urunun Fiyati:
            <span class="text-success"> ${(product.price * 30).toFixed(2)}₺</span>
        </h4>

        <p class="lead">
         ${product.desc}
         </p>

    `;
};

// Urun bulunamadiginda hata sayfasini render eden fonksiyon

export const renderNotFoundedPage = (outlet) => {
  outlet.innerHTML =  `
                
  <div style='height:90vh' class='d-flex justify-content-center align-items-center' >
  <div class='d-flex flex-column align-items-center gap-3'> 
  <h1 class='fw-bold'> Aradiginiz urun mevcut degil </h1> 
  <a href='/'>Anasayfaya Donun</a>
  </div>
  </div>
  

   `;
}