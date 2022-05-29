// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   if (nameInput.value === "" || emailInput.value === "") {
//     // alert('Please enter all fields');
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter all fields";

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     //Store the user-data in local storage
//     localStorage.setItem("name", nameInput.value);
//     localStorage.setItem("email", emailInput.value);
//     console.log(localStorage);
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }

//------------------------------TASK 11 ---------------------

// let userInfoList = [];
// function onSubmit(e) {
//   e.preventDefault();
//   if (nameInput.value === "" || emailInput.value === "") {
//     // alert('Please enter all fields');
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter all fields";

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     //create a new object
//     let myObj = {
//       name: nameInput.value,
//       email: emailInput.value,
//     };

//     // push the object into global array
//     userInfoList.push(myObj);

//     // store the array in local storage
//     localStorage.setItem("user", JSON.stringify(userInfoList));

//     // print the userdata from local storage
//     console.log(JSON.parse(localStorage.user));

//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }

//-------------------------------TASK - 12 --------------------------------->

window.addEventListener("DOMContentLoaded", (e) => {
  singleItem();
});
let userInfoList = [];
function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    //create a new object
    let myObj = {
      name: nameInput.value,
      email: emailInput.value,
    };

    // push the object into global array
    userInfoList.push(myObj);

    // store the array in local storage
    localStorage.setItem("user", JSON.stringify(userInfoList));

    singleItem();
  }
}
function singleItem() {
  let allUser = JSON.parse(localStorage.user);
  console.log(allUser);
  //create a single list
  for (let i = 0; i < allUser.length; i++) {
    var li = document.createElement("li");
    let name = allUser[i].name;
    let email = allUser[i].email;
    //   console.log(name, email);
    let editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));

    editBtn.style.marginLeft = "1.5rem";
    editBtn.style.padding = "0.2rem 1.5rem";
    editBtn.style.color = "white";
    editBtn.style.background = "green";
    editBtn.style.border = "0.2rem solid green";
    editBtn.style.borderRadius = "0.5rem";
    let delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("X"));
    delBtn.style.marginLeft = "1rem";
    delBtn.style.padding = "0.2rem 0.5rem";
    delBtn.style.color = "white";
    delBtn.style.background = "red";
    delBtn.style.border = "0.2rem solid red";
    delBtn.style.borderRadius = "0.4rem";

    li.innerHTML = `${name} ${email}`;
    li.appendChild(editBtn);
    li.appendChild(delBtn);
  }
  let list = document.querySelector(".items");
  list.appendChild(li);

  nameInput.value = "";
  emailInput.value = "";
}
