function handleSubmitEvent(event) {
  event.preventDefault();
  const uname = document.getElementById("uname").value;
  const uemail = document.getElementById("email").value;
  const utel = document.getElementById("tel").value;
  const userDetails = {
    name: uname,
    email: uemail,
    tel: utel,
  };
  const data = JSON.stringify(userDetails);
  console.log(data);
  axios
    .post(
      "https://crudcrud.com/api/5cf6fb27665d401aa9515d7ef54f848f/studentsRecordData",
      {
        data,
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
      document.body.innerHTML = "Something went wrong, Check again:" + err;
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  axios
    .get(
      "https://crudcrud.com/api/5cf6fb27665d401aa9515d7ef54f848f/studentsRecordData"
    )
    .then((response) => {
      console.log("response from GET", response);
      for (let i = 0; i < response.data.length; i++) {
        console.log(response.data[i]);
        showData(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
      document.body.innerHTML = "Something went wrong, Check again:" + err;
    });
});

function showData(data) {
  console.log(data);
  const parsedData = JSON.parse(data.data);
  const list = document.getElementById("list");
  list.innerHTML += `<li id=${parsedData.email}>${parsedData.name}-${parsedData.email}-${parsedData.tel}
    <button id="delete-btn" onclick=deleteDetailsFromScreen('${parsedData.email}')>Delete</button>
    <button id="edit-btn" onclick=EditDetailsFromScreen('${parsedData.email}','${parsedData.name}','${parsedData.tel}')>Edit</button>
    </li> `;
}
function deleteDetailsFromScreen(email) {
  console.log(email, "email");
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(email);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
  localStorage.removeItem(email);
}

function EditDetailsFromScreen(email, name, tel) {
  console.log("name-email-tel");
  document.getElementById("uname").value = name;
  document.getElementById("email").value = email;
  document.getElementById("tel").value = tel;
  deleteDetailsFromScreen(email);
}
