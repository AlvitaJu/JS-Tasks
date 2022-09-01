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
    console.log(cars);
    carsResults(cars);
  })
  .catch((error) => console.log(error));

const tbody = document.querySelector("tbody");

function carsResults(cars) {
  const carBrand = cars.brand;
  const carModel = cars.models;

  cars.forEach(car => {
    const tr = tbody.insertRow();
    tr.insertCell().textContent = car.brand;
    tr.insertCell().textContent = car.model;
  });
}
