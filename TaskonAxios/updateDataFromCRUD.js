let obj = {
  flag: "false",
  id: null,
};

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

  if (obj.flag === true) {
    axios.put(
      `https://crudcrud.com/api/75400880c5744ae4b7cc88a0e4c7e881/studentsRecordData/${obj.id}`,
      {
        data: {
          name: document.getElementById("uname").value,
          email: document.getElementById("email").value,
          tel: document.getElementById("tel").value,
        },
      }
    );
    obj.flag = false;
  } else {
    const data = userDetails;
    axios
      .post(
        "https://crudcrud.com/api/75400880c5744ae4b7cc88a0e4c7e881/studentsRecordData",
        { data }
      )
      .then((response) => {
        console.info(response);
      })
      .catch((err) => {
        console.error(err);
        document.body.innerHTML = "Something went wrong, Check again:" + err;
      });
  }
  location.reload(true);
}
document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  axios
    .get(
      "https://crudcrud.com/api/75400880c5744ae4b7cc88a0e4c7e881/studentsRecordData"
    )
    .then((response) => {
      console.info("response from GET", response);
      for (let i = 0; i < response.data.length; i++) {
        showData(response.data[i]);
      }
    })
    .catch((err) => {
      console.error(err);
      document.body.innerHTML = "Something went wrong, Check again:" + err;
    });
});

function showData(data) {
  const parsedData = data.data;
  const list = document.getElementById("list");
  list.innerHTML += `<li id=${parsedData.email}>${parsedData.name}-${parsedData.email}-${parsedData.tel}
    <button id="delete-btn" onclick=deleteDetailsFromScreen('${parsedData.email}','${data._id}')>Delete</button>
    <button id="edit-btn" onclick=EditDetailsFromScreen('${parsedData.name}','${parsedData.email}','${parsedData.tel}','${data._id}')>Edit</button>
    </li> `;
}
function deleteDetailsFromScreen(email, id) {
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(email);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }

  axios
    .delete(
      `https://crudcrud.com/api/75400880c5744ae4b7cc88a0e4c7e881/studentsRecordData/${id}`
    )
    .catch((err) => {
      console.error(err, err.message);
      document.body.innerHTML = "Something went wrong, Check again:" + err;
    });
}

function EditDetailsFromScreen(name, email, tel, id) {
  obj.flag = true;
  obj.id = id;
  document.getElementById("uname").value = name;
  document.getElementById("email").value = email;
  document.getElementById("tel").value = tel;
}
