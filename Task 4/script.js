/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((res) => res.json())
  .then((cars) => {
    carsResults(cars);
  })
  .catch((error) => console.log(error));

function carsResults(cars) {
  cars.forEach((car) => {
    const ul_s = document.createElement("ul");
    ul_s.innerText = car.brand;
    ul_s.style.fontSize = "30px";
    ul_s.style.padding = "15px";

    const li_s = document.createElement("li");
    li_s.innerText = car.models;
    li_s.style.padding = "15px";
    li_s.style.listStyleType = "square";
    li_s.style.fontSize = "18px";
    document.getElementById("output").append(ul_s, li_s);
  });
}

const div = document.getElementById("output");
div.style.width = "80%";
div.style.textAlign = "center";
