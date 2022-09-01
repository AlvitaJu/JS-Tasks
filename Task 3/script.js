/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((users) => {
      console.log(users);
      usersResults(users);
    })
    .catch((error) => console.log(error));
}

function usersResults(users) {
  users.forEach((user) => {
    const login = document.createElement("p");
    login.innerText = user.login;
    login.style.fontSize = "xx-large";
    login.style.padding = "30px";

    const img = document.createElement("img");
    img.src = user.avatar_url;
    img.alt = `${users.login} profile picture`;
    img.style.width = "300px";
    img.style.borderRadius = '30px';

    document.getElementById("output").append(login, img);
  });

  function deleteInfo() {
    const message = document.getElementById("message");
    message.innerText = "";
  }
  deleteInfo();
}
