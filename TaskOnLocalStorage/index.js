function handleSubmitEvent(event) {
  event.preventDefault();
  const uname = document.getElementById("uname").value;
  const uemail = document.getElementById("email").value;
  const utel = document.getElementById("tel").value;
  // console.log(uname);
  // localStorage.setItem("uname", uname);
  // localStorage.setItem("uemail", uemail);
  // localStorage.setItem("utel", utel);
  // console.log(localStorage.getItem("uemail"));
  const userDetails = {
    name: uname,
    email: uemail,
    tel: utel,
  };
  const dataFields = JSON.stringify(userDetails);
  localStorage.setItem(userDetails.email, dataFields);
  console.log(dataFields);

  // ***********2nd way**********
  // let arr = new Array();
  // if (localStorage.getItem("UserDetails") === null) {
  //   arr.push(userDetails);
  //   console.log(arr);
  //   localStorage.setItem("UserDetails", JSON.stringify(arr));
  // } else {
  //   var data = JSON.parse(localStorage.getItem("UserDetails"));
  //   // console.log(typeof data);
  //   console.log(data);
  //   data.push(userDetails);
  //   console.log(data);
  //   localStorage.setItem("UserDetails", JSON.stringify(data));
  // }
  showData(dataFields);
}

function showData(dataFields) {
  const parsedData1 = JSON.parse(dataFields);
  // const detail = JSON.parse(localStorage.getItem(data.email));
  // console.log(details);
  // console.log(details[0].name);
  // const list = document.querySelector("ul");
  // for (let i in details) {
  // console.log("details--", detail);
  //   const child = document.createElement("li");
  const list = document.getElementById("list");
  list.innerHTML += `<li id=${parsedData1.email}>${parsedData1.name}-${parsedData1.email}-${parsedData1.tel}
    <button id="delete-btn" onclick=deleteDetailsFromScreen('${parsedData1.email}')>Delete</button>
    <button id="edit-btn" onclick=EditDetailsFromScreen('${parsedData1.email}','${parsedData1.name}','${parsedData1.tel}')>Edit</button>
    </li> `;
  // list.appendChild(child);
  // }
}
function deleteDetailsFromScreen(email) {
  //console.log(email, "email");
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(email);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
  localStorage.removeItem(email);
}

function EditDetailsFromScreen(email, name, tel) {
  //console.log("name-email-tel");
  document.getElementById("uname").value = name;
  document.getElementById("email").value = email;
  document.getElementById("tel").value = tel;
  deleteDetailsFromScreen(email);
}
