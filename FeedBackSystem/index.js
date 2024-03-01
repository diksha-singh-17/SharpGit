var count = 0;

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
        "https://crudcrud.com/api/c9194962c1a6479880cf8b1d53a04674/feedback",
        { obj }
      )
      .then((res) => {
        showData(obj, obj1.id);
        console.log(res);
      })
      .catch((e) => console.log(e));
  } else {
    const upname = document.getElementById("name").value;
    const inputCat = document.getElementById("mySelect");
    const upitem = inputCat.options[inputCat.selectedIndex].text;
    const obj = {
      name: upname,
      category: upitem,
    };
    axios
      .put(
        `https://crudcrud.com/api/c9194962c1a6479880cf8b1d53a04674/feedback/${obj1.id}`,
        {
          obj,
        }
      )
      .then((res) => {
        showData(obj, obj1.id);
        obj1.flag = false;
      })
      .catch((e) => console.log(e));
    switch (item) {
      case "1":
        --count;
        newEl.textContent = count;
        break;
      case "2":
        --count;

        newEl2.textContent = count;
        break;
      case "3":
        --count;

        newEl3.textContent = count;
        break;
      case "4":
        --count;

        newEl4.textContent = count;
        break;
      case "5":
        --count;

        newEl5.textContent = count;
        break;
      default:
        console.log("error");
    }
  }

  location.reload(true);
  // console.log(item, typeof item);
}

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  axios
    .get("https://crudcrud.com/api/c9194962c1a6479880cf8b1d53a04674/feedback")
    .then((response) => {
      response.data.forEach((res) => {
        obj1.item = res.obj;
        // console.log(obj1.item);
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
        count = 0;
        newEl = document.createElement("span");
        newEl.textContent = count + 1;
        count++;
        parentEl.appendChild(newEl);
      } else {
        // console.log("inside else1", count);
        count++;
        newEl.textContent = count;
      }

      break;
    case "2":
      const parentEl2 = document.getElementById("star2");
      if (parentEl2.children.length === 0) {
        count = 0;
        newEl2 = document.createElement("span");
        newEl2.textContent = count + 1;
        count++;
        parentEl2.appendChild(newEl2);
      } else {
        count++;
        newEl2.textContent = count;
      }

      break;
    case "3":
      const parentEl3 = document.getElementById("star3");
      if (parentEl3.children.length === 0) {
        count = 0;
        newEl3 = document.createElement("span");
        newEl3.textContent = count + 1;
        count++;
        parentEl3.appendChild(newEl3);
      } else {
        count++;
        newEl3.textContent = count;
      }
      // count = 0;
      break;
    case "4":
      const parentEl4 = document.getElementById("star4");
      if (parentEl4.children.length === 0) {
        count = 0;
        newEl4 = document.createElement("span");
        newEl4.textContent = count + 1;
        count++;
        parentEl4.appendChild(newEl4);
      } else {
        count++;
        newEl4.textContent = count;
      }
      // count = 0;
      break;
    case "5":
      const parentEl5 = document.getElementById("star5");
      if (parentEl5.children.length === 0) {
        count = 0;
        newEl5 = document.createElement("span");
        newEl5.textContent = count + 1;
        count++;
        parentEl5.appendChild(newEl5);
      } else {
        count++;
        newEl5.textContent = count;
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
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(name);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
  axios
    .delete(
      `https://crudcrud.com/api/c9194962c1a6479880cf8b1d53a04674/feedback/${id}`
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
      --count;

      newEl2.textContent = count;
      break;
    case "3":
      --count;

      newEl3.textContent = count;
      break;
    case "4":
      --count;

      newEl4.textContent = count;
      break;
    case "5":
      --count;

      newEl5.textContent = count;
      break;
    default:
      console.log("error");
  }
  // showData(obj, obj1.id);
}

function EditUserDetails(amt, item, id) {
  obj1.flag = true;
  obj1.id = id;
  document.getElementById("name").value = amt;
  document.getElementById("mySelect").value = item;

  document.getElementById("submit-btn").textContent = "Edit";
  // deleteUserDetails(amt, item, id);
}
