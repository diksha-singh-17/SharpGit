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
  // localStorage.setItem(userDetails.email, data);
  console.log(data);

  axios
    .post(
      "https://crudcrud.com/api/461b4aedf3894bb8aef9d75040891f5a/bookingData",
      {
        data,
      }
    )
    .then((response) => {
      showData(response.data);
    })
    .catch((err) => {
      console.log(err);
      document.body.innerHTML =
        document.body.innerHTML + "Something went wrong, Check again:" + err;
    });
}
//   axios
//     .get(
//       "https://crudcrud.com/api/461b4aedf3894bb8aef9d75040891f5a/appointmentData"
//     )
//     .then((response) => {
//       console.log(response);
//       const t = response.data;
//       console.log(t);
// const parsedData = JSON.parse(t);
// console.log(parsedData);
//     })
//     .catch((err) => {
//       console.log(err);
//       document.body.innerHTML =
//         document.body.innerHTML + "Something went wrong, Check again:" + err;
//     });

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
