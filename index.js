// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const submit_btn = document.querySelector(".btn");
let update_btn = document.querySelector(".update-btn");

// Listen for form submit
// myForm.addEventListener("submit", onSubmit);
submit_btn.addEventListener("click", onSubmit);

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

let userInfoObj = [];

window.addEventListener("DOMContentLoaded", () => {
  itemFromLocaStorage();
  displayItem();
});

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
      id: Date.now(),
      name: nameInput.value,
      email: emailInput.value,
    };

    // push the object into global array
    userInfoObj.push(myObj);

    // store the array in local storage
    localStorage.setItem("user", JSON.stringify(userInfoObj));

    // let items = itemFromLocaStorage();
    displayItem();

    nameInput.value = "";
    emailInput.value = "";
  }
}

function displayItem() {
  console.log("display");
  let userList = userInfoObj;
  console.log(userList);
  let ul = document.getElementById("users");
  ul.innerHTML = "";
  userList
    ? userList.forEach((item) => {
        let li = document.createElement("li");
        li.setAttribute("key", item.id);
        li.className = "list";
        let nameSpan = document.createElement("span");
        nameSpan.style.color = "#36454F";
        let nameText = document.createTextNode(item.name);
        nameSpan.append(nameText);

        let emailSpan = document.createElement("span");
        emailSpan.style.color = "#0096FF";
        emailSpan.style.marginLeft = "1rem";
        let emailText = document.createTextNode(item.email);
        emailSpan.append(emailText);
        let listDiv = document.createElement("div");
        listDiv.appendChild(nameSpan);
        listDiv.appendChild(emailSpan);
        li.appendChild(listDiv);
        ul.appendChild(li);
        //create a div
        let div = document.createElement("div");
        //create edit btn
        let editbtn = document.createElement("button");
        //add class
        editbtn.className = "edit-btn";
        // add event to edit btn
        editbtn.addEventListener("click", () => handleEdit(item.id));
        //create a textNode
        let editText = document.createTextNode("EDIT");
        //append text inside btn
        editbtn.append(editText);

        //create a del btn
        let delbtn = document.createElement("button");
        //add class
        delbtn.className = "del-btn";
        // add event to del btn
        delbtn.addEventListener("click", (e) => handleDel(e, item.id));
        //create a text node
        let delText = document.createTextNode("X");
        // appedn text in del tbn
        delbtn.append(delText);
        // append edit btn and de; btn indside div
        div.appendChild(editbtn);
        div.appendChild(delbtn);

        //append div inside li
        li.append(div);
      })
    : "";
}
function itemFromLocaStorage() {
  let allUser = JSON.parse(localStorage.getItem("user"));
  if (allUser) {
    allUser.forEach((item) => {
      userInfoObj.push(item);
    });
  }
}

function handleEdit(id) {
  submit_btn.style.display = "none";
  update_btn.style.display = "block";
  //------find that specific item in userInfo
  let currentItem = userInfoObj.find((element) => {
    return element.id == id;
  });
  // set the name and email id in input box
  nameInput.value = currentItem.name;
  emailInput.value = currentItem.email;
  update_btn.addEventListener("click", (e) => handleUpdate(e, id));
}

function handleUpdate(e, id) {
  e.preventDefault();
  console.log(e.target.value);
  console.log(id);
  // console.log(nameInput.name, emailInput.email);
  let allItem = JSON.parse(localStorage.getItem("user"));
  let updatedItems = allItem.map((el) => {
    if (el.id == id) {
      return {
        ...el,
        name: nameInput.value,
        email: emailInput.value,
      };
    }
    return el;
  });

  userInfoObj = updatedItems;
  localStorage.setItem("user", JSON.stringify(updatedItems));
  displayItem();
  nameInput.value = "";
  emailInput.value = "";
  update_btn.style.display = "none";
  submit_btn.style.display = "block";
}

function handleDel(e, id) {
  e.preventDefault();
  let allItem = JSON.parse(localStorage.getItem("user"));
  let updatedItems = allItem.filter((el) => {
    return el.id != id;
  });
  userInfoObj = updatedItems;
  localStorage.setItem("user", JSON.stringify(updatedItems));
  displayItem();
}
