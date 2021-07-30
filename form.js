console.log("inside the login form");

let submit = document.getElementById("submit");
submit.addEventListener("click", store);

function store(e) {
  e.preventDefault();
  console.log("you have clicked on submit");
  let localData = {
    fname: document.getElementById("fname").value,
    email: document.getElementById("email").value,
    pass: document.getElementById("pass").value,
    position: document.getElementById("position").value,
  };
  localStorage.setItem("localData", JSON.stringify(localData));
  let data = JSON.parse(localStorage.getItem("localData"));
  console.log(data);
}
