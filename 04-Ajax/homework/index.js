// ---------- Con Jquery ----------

/* function showFriends() {
  var list = $("#lista");
  list.empty();
  let img = document.getElementsByTagName("img"); // [<img src='url'>]
  if (img.length > 0) {
    img[0].remove();
  }
  $.get("http://localhost:5000/amigos", function (data) {
    for (let i = 0; i < data.length; i++) {
      // var li = document.createElement("li");
      // li.textContent = data[i].name;
      // list.append(li);
      let li = `<li>${data[i].name}<button onclick="deleteFriend(${data[i].id})">X</button></li>`;
      list.append(li);
    }
  });
}

function searchFriend() {
  let input = $("#input").val();
  document.getElementById("input").value = ""; // Limpia el input
  $.get(`http://localhost:5000/amigos/${input}`, function (data) {
    $("#amigo").text(data.name);
  });
}

function deleteFriend(input) {
  if (typeof input !== "number") {
    input = $("#inputDelete").val();
    document.getElementById("inputDelete").value = ""; // Limpia el input
  }
  $.ajax(`http://localhost:5000/amigos/${input}`, {
    type: "DELETE",
    success: function () {
      $("#success").text(`El amigo ${input} ha sido borrado`);
      //alert(`El amigo ${input} ha sido borrado`);
      showFriends();
    },
  });
}

$("#boton").click(showFriends);

$("#search").click(searchFriend);

$("#delete").click(deleteFriend); */

// ---------- Con Javascript actual ----------

//const button = document.getElementById("boton");
const button = document.querySelector("#boton");
const ul = document.querySelector("#lista");
const input = document.querySelector("#input");
const btnSearch = document.querySelector("#search");
const span = document.querySelector("#amigo");
const inputDelete = document.querySelector("#inputDelete");
const btnDelete = document.querySelector("#delete");
const spanDelete = document.querySelector("#success");

function showFriends() {
  ul.innerHTML = "";
  // Eliminamos el loading
  let img = document.getElementsByTagName("img"); // [<img src='url'>]
  if (img.length > 0) {
    img[0].remove();
  }
  fetch("http://localhost:5000/amigos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      /* data.forEach((friend) => {
        let li = document.createElement("li"); // <li></li>
        li.textContent = friend.name; //<li>Toni</li>
        document.getElementById("lista").appendChild(li);
      }); */
      for (let i = 0; i < data.length; i++) {
        // let li = document.createElement("li");
        // li.innerText = data[i].name;
        // ul.appendChild(li);
        let li = `<li>${data[i].name} <button onclick="deleteFriend(${data[i].id})">X</button></li>`;
        ul.innerHTML += li;
      }
    });
}

button.addEventListener("click", showFriends);

function seachFriend() {
  let id = input.value;
  input.value = "";
  fetch(`http://localhost:5000/amigos/ ${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      span.innerText = data.name;
    });
}

btnSearch.addEventListener("click", seachFriend);

function deleteFriend(idFriend) {
  if (typeof idFriend !== "number") {
    idFriend = inputDelete.value;
    inputDelete.value = "";
  }
  fetch(`http://localhost:5000/amigos/ ${idFriend}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      spanDelete.innerText = `Tu amigo ${idFriend} ha sido eliminado`;
      // alert(`El amigo ${idFriend} ha sido borrado`);
      showFriends();
    });
}

btnDelete.addEventListener("click", deleteFriend);
