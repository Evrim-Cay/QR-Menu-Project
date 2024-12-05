import { renderDetailPage, renderNotFoundedPage } from "./ui.js";

const params = new URLSearchParams(window.location.search);

// Yukaridaki classdan ornek alinarak url'ddeki parametreye ulasildi.
const id = parseInt(params.get("id"));

// Urun detayinin aktarilacagi Html elemani

const outlet = document.getElementById("outlet")

// Sayfa yuklendiginde calisacak fonksiyon

document.addEventListener("DOMContentLoaded",async () => {
    //db.json dosyasina istek atma
  const res = await fetch("../db.json");
  // Verileri Js nesnesine cevir
  const data = await res.json();

  // id ye gore ilgili elemani bul
  const product = data.menu.find((item) => item.id === id);
  
  // Eger urun yoksa urun bulunamadi sayfasina git
  if(!product){
     //Urun bulunamadi icerigini render et
     renderNotFoundedPage(outlet)
  }
  else{
    renderDetailPage(product, outlet);
  }


});