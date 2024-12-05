import { fetchMenu } from "./api.js";
import { renderCards } from "./ui.js";

// Sayfanin yuklenme anini izle
document.addEventListener("DOMContentLoaded", async () => {

  const data = await fetchMenu();
// db.json dosyasindan alinan veriler ile ekrana menu elemani render eden fonksiyon
  renderCards(data.menu);

  //Input elemanlarina eris
 const inputs = document.querySelectorAll("#buttons input");

inputs.forEach((input) => {
 input.addEventListener("change", () => {
    const selected = input.id;

    //Eger hepsi seciliyse tum urunleri render et 
if(selected==="all"){
    renderCards(data.menu);
} else{
// Ilgili kategoriyle alakali urunleri filtrele 
    const filtered = data.menu.filter((item) => item.category==selected)
// Hepsi secili degilse ilgili categoryi render et 
    renderCards(filtered);
}

 });
});
});