/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("input").addEventListener("submit", (e) => {
  e.preventDefault();

  const svoris = document.getElementById("search").value;

  function svorioKonvertavimasLb(svoris) {
    const svarai = svoris * 2.2046;
    return svarai;
  }

  function svorioKonvertavimasGr(svoris) {
    const gramai = svoris / 0.001;
    return gramai;
  }

  function svorioKonvertavimasOz(svoris) {
    const uncijos = svoris * 35.274;
    return uncijos;
  }

  document.getElementById("output").style.fontSize = "2.5em";
  document.getElementById("output").style.paddingLeft = "110px";

  function pridetiDuomenis() {
    const rezultatas = document.getElementById("output");
    rezultatas.innerText = `Jūsų svoris svarais: ${svorioKonvertavimasLb(
      svoris
    )}, gramais: ${svorioKonvertavimasGr(
      svoris
    )}, uncijomis: ${svorioKonvertavimasOz(svoris)}`;
  }

  pridetiDuomenis();
});
