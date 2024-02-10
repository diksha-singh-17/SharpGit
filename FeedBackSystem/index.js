var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

let newEl = "";
let newEl2 = "";
let newEl3 = "";
let newEl4 = "";
let newEl5 = "";

const obj1 = {
  flag: false,
  id: null,
  // item: null,
};
// console.log("count", count);
function handleEvent(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const inputCat = document.getElementById("mySelect");
  const item = inputCat.options[inputCat.selectedIndex].text;

  const obj = {
    name: name,
    category: item,
  };

  if (obj1.flag === false) {
    axios
      .post(
        "https://crudcrud.com/api/e037d9680e5a473eae54b9e9bb49387b/feedback",
        { obj }
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  } else {
    const upname = document.getElementById("name").value;
    const inputCat = document.getElementById("mySelect");
    const upitem = inputCat.options[inputCat.selectedIndex].text;
    console.log("inside put");
    const obj = {
      name: upname,
      category: upitem,
    };
    axios.put(
      `https://crudcrud.com/api/e037d9680e5a473eae54b9e9bb49387b/feedback/${obj1.id}`,
      {
        obj,
      }
    );
    switch (item) {
      case "1":
        --count;

        newEl.textContent = count;
        break;
      case "2":
        --count2;

        newEl2.textContent = count2;
        break;
      case "3":
        --count3;

        newEl3.textContent = count3;
        break;
      case "4":
        --count4;

        newEl4.textContent = count4;
        break;
      case "5":
        --count5;

        newEl5.textContent = count5;
        break;
      default:
        console.log("error");
    }
    obj1.flag = false;
  }
  // showData(obj1.item, obj1.id);
  location.reload(true);
  // console.log(item, typeof item);
}

document.addEventListener("DOMContentLoaded", (e) => {
  axios
    .get("https://crudcrud.com/api/e037d9680e5a473eae54b9e9bb49387b/feedback")
    .then((response) => {
      response.data.forEach((res) => {
        // obj1.item = res.obj;
        showData(res.obj, res._id);
      });
    });
});
function showData(item, id) {
  switch (item.category) {
    case "0":
      console.log("wrong input");
    case "1":
      const parentEl = document.getElementById("star1");
      if (parentEl.children.length === 0) {
        newEl = document.createElement("span");
        newEl.textContent = count + 1;
        count++;
        parentEl.appendChild(newEl);
      } else {
        console.log("inside else1", count);
        count++;
        // newEl = document.createElement("span");
        newEl.textContent = count;
        // ++count;
        // parentEl.appendChild(newEl);
        // document.getElementsByTagName("span").innerHTML = count;

        // parentEl.appendChild(newEl);
      }
      // count = 0;
      break;
    case "2":
      const parentEl2 = document.getElementById("star2");
      if (parentEl2.children.length === 0) {
        newEl2 = document.createElement("span");
        newEl2.textContent = count2 + 1;
        count2++;
        parentEl2.appendChild(newEl2);
      } else {
        console.log("inside else2", count2);
        count2++;
        newEl2.textContent = count2;
      }
      // count = 0;
      break;
    case "3":
      const parentEl3 = document.getElementById("star3");
      if (parentEl3.children.length === 0) {
        newEl3 = document.createElement("span");
        newEl3.textContent = count3 + 1;
        count3++;
        parentEl3.appendChild(newEl3);
      } else {
        console.log("inside else3", count3);
        count3++;
        newEl3.textContent = count3;
      }
      // count = 0;
      break;
    case "4":
      const parentEl4 = document.getElementById("star4");
      if (parentEl4.children.length === 0) {
        newEl4 = document.createElement("span");
        newEl4.textContent = count4 + 1;
        count4++;
        parentEl4.appendChild(newEl4);
      } else {
        console.log("inside else--4", count4);
        count4++;
        newEl4.textContent = count4;
      }
      // count = 0;
      break;
    case "5":
      const parentEl5 = document.getElementById("star5");
      if (parentEl5.children.length === 0) {
        newEl5 = document.createElement("span");
        newEl5.textContent = count5 + 1;
        count5++;
        parentEl5.appendChild(newEl5);
      } else {
        console.log("inside else5", count5);
        count5++;
        newEl5.textContent = count5;
      }
      // count = 0;
      break;
    default:
      console.log("Error!");
  }

  const list = document.getElementById("list");
  list.innerHTML += `<li class="p-2"id=${item.name}>${item.name}-${item.category}
    <button id="delete-btn"   class="btn btn-primary m-2" onclick=deleteUserDetails('${item.name}','${item.category}','${id}')>Delete</button>
    <button id="edit-btn"   class="btn btn-primary m-2" onclick=EditUserDetails('${item.name}','${item.category}','${id}')>Edit</button>
    </li> `;

  document.getElementById("name").value = "";
  document.getElementById("mySelect").value = "";
}
function deleteUserDetails(name, item, id) {
  console.log("insde deletets", id);
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(name);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
  axios
    .delete(
      `https://crudcrud.com/api/e037d9680e5a473eae54b9e9bb49387b/feedback/${id}`
    )
    .catch((err) => {
      console.error(err, err.message);
      document.body.innerHTML = "Something went wrong, Check again:" + err;
    });
  switch (item) {
    case "1":
      --count;

      newEl.textContent = count;
      break;
    case "2":
      --count2;

      newEl2.textContent = count2;
      break;
    case "3":
      --count3;

      newEl3.textContent = count3;
      break;
    case "4":
      --count4;

      newEl4.textContent = count4;
      break;
    case "5":
      --count5;

      newEl5.textContent = count5;
      break;
    default:
      console.log("error");
  }
}

function EditUserDetails(amt, item, id) {
  obj1.flag = true;
  obj1.id = id;
  document.getElementById("name").value = amt;
  document.getElementById("mySelect").value = item;

  document.getElementById("submit-btn").textContent = "Edit";
  // deleteUserDetails(amt, item, id);
}
