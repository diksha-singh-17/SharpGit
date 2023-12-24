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
  const myObj = JSON.stringify(userDetails);
  localStorage.setItem("UserDetails", myObj);
  // console.log(JSON.parse(localStorage.getItem("UserDetails")));
}
