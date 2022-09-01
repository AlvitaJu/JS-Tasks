/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let paspaudimai = 0;
const mygtukas = document.getElementById("btn__element");
const rezultatas = document.getElementById("btn__state");

mygtukas.onclick = function () {
  paspaudimai++;
  rezultatas.innerHTML = paspaudimai;
};
