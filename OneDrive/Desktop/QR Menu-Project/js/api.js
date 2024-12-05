
// Db.Json'dan verileri alan fonksiyon
export const fetchMenu = async () => {
    //Fetch ile db.json'dan veriler alindi
const res = await fetch("../db.json");
// Veriler Js'de kullanilacak tipe cevrildi

const data = await res.json();

return data;
};