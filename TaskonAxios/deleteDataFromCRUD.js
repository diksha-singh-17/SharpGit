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
      "https://crudcrud.com/api/a4123d535e8b44fdb9fb8c4b244b78c5/studentsRecordData",
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
      "https://crudcrud.com/api/a4123d535e8b44fdb9fb8c4b244b78c5/studentsRecordData"
    )
    .then((response) => {
      console.log("response from GET", response);
      for (let i = 0; i < response.data.length; i++) {
        showData(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
      document.body.innerHTML = "Something went wrong, Check again:" + err;
    });
});

function showData(data) {
  const parsedData = JSON.parse(data.data);
  console.log(parsedData);
  const list = document.getElementById("list");
  list.innerHTML += `<li id=${parsedData.email}>${parsedData.name}-${parsedData.email}-${parsedData.tel}
    <button id="delete-btn" onclick=deleteDetailsFromScreen('${parsedData.email}','${data._id}')>Delete</button>
    <button id="edit-btn" onclick=EditDetailsFromScreen('${parsedData.email}','${parsedData.name}','${parsedData.tel}')>Edit</button>
    </li> `;
}
function deleteDetailsFromScreen(email, id) {
  console.log(email, "email", id);
  console.log(id);
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(email);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }

  axios
    .delete(
      `https://crudcrud.com/api/a4123d535e8b44fdb9fb8c4b244b78c5/studentsRecordData/${id}`
    )
    .catch((err) => {
      console.log(err);
      document.body.innerHTML = "Something went wrong, Check again:" + err;
    });
}

function EditDetailsFromScreen(email, name, tel) {
  console.log("name-email-tel");
  document.getElementById("uname").value = name;
  document.getElementById("email").value = email;
  document.getElementById("tel").value = tel;
  deleteDetailsFromScreen(email);
}
