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

    // print the userdata from local storage
    console.log(JSON.parse(localStorage.user));

    nameInput.value = "";
    emailInput.value = "";
  }
}
