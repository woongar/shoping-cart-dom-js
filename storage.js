//UPDATE PRODUCTS //
const itemIdVerify = document.querySelector("#itemId");
const updateNameInput = document.querySelector("#updateName");
const updatePriceInput = document.querySelector("#updatePrice");
const updateUnitsInput = document.querySelector("#updateUnits");
const updateImgUrlInput = document.querySelector("#updateImgUrl");

const productToUpdate = document.querySelector("#productToUpdate");
const updatingItemId = document.querySelector("#updatingItemId");
////////////////////
const removeProductInput = document.querySelector("#removeProductInput");
const productNameInput = document.querySelector("#productName");
const unitsInput = document.querySelector("#units");
const imgUrlInput = document.querySelector("#imgurl");

const drawHTML = () => {
  document.querySelector("#productsTable tbody").innerHTML = productsss
    .map((x, index) => {
      return `
<tr>
    <td>${index + 1}.</td>
    <td>${x.name}</td>
    <td>${x.price}</td>
    <td>${x.units}</td>
    <td><img height="120" src="${x.imgUrl}"></td>
    
</tr>`;
    })
    .join("");

  document.querySelector("#productToUpdate").innerHTML = "";
};

//local storage getItem
let productsss = [];
const localProducts = localStorage.getItem("products"); //read the localstorage if have item in local so take if, else start with the first 3 items
if (localProducts) {
  productsss = JSON.parse(localProducts); //back it to object if in local
} else {
  productsss = [
    {
      id: 1,
      name: "Gold",
      price: 100,
      imgUrl: "images/gold.jpg",
      units: 5,
    },
    {
      id: 2,
      name: "Coral",
      price: 10,
      imgUrl: "images/coral.jpg",
      units: 5,
    },
    {
      id: 3,
      name: "Silver",
      price: 50,
      imgUrl: "images/silver.jpg",
      units: 5,
    },
  ];

  localStorage.setItem("products", JSON.stringify(productsss)); //turn the object to string and name it as products //1
}
drawHTML();

document.querySelector("#addProduct").addEventListener("click", () => {
  productsss.push({
    id: productsss.length + 1, // automatic id added
    name: productNameInput.value,
    price: price.value, //dont need to take it from query cause its already hava a id in html
    units: units.value,
    imgUrl: imgUrlInput.value,
  });

  //local storage setItem

  localStorage.setItem("products", JSON.stringify(productsss));

  drawHTML();
  productNameInput.value = "";
  price.value = "";
  units.value = "";
  imgUrlInput.value = "";
});
//REMOVE PRODUCT FROM SHOP
document.querySelector("#removeProduct").addEventListener("click", () => {
  return removeProduct();
});

const removeProduct = () => {
  for (let i = 0; i < productsss.length; i++) {
    console.log(removeProductInput.value);
    if (i + 1 == removeProductInput.value) {
      productsss.splice(i, 1);
      localStorage.setItem("products", JSON.stringify(productsss));
      drawHTML();
      break;
    }
  }
};
/////////////////////////////////////////////////////////////////////
//VERIFY PRODUCT BEFORE PARCHASING
document.querySelector("#verifyProductButton").addEventListener("click", () => {
  return verifyProduct();
});
// //UPDATE PRODUCTS //
// //CHECK PRODUCT IDENTITY BY ID AND NAME
const verifyProduct = () => {
  console.log("item id verify value: " + itemIdVerify.value);

  let index = itemIdVerify.value - 1;
  if (productsss[index]) {
    document.querySelector("#updatingItemId").value = itemIdVerify.value;
    document.querySelector("#updateName").value = productsss[index].name;
    document.querySelector("#updatePrice").value = productsss[index].price;
    document.querySelector("#updateUnits").value = productsss[index].units;
    document.querySelector("#updateImgUrl").value = productsss[index].imgUrl;
    document.querySelector("#updateName").focus();
  } else {
    document.querySelector("#productToUpdate").innerHTML = "לא נמצא מוצר";
  }
};
////////////////////////////////////////////////////////////////////////////////////////

document.querySelector("#updateProductButton").addEventListener("click", () => {
  return updateProduct();
});
//  // UPDATE
const updateProduct = () => {
  let index = document.querySelector("#updatingItemId").value - 1; //find the item
  if (productsss[index]) {
    let update = {
      name: document.querySelector("#updateName").value,
      price: document.querySelector("#updatePrice").value,
      units: document.querySelector("#updateUnits").value,
      imgUrl: document.querySelector("#updateImgUrl").value,
    };

    productsss[index] = update;

    localStorage.setItem("products", JSON.stringify(productsss));
    drawHTML();
  } else {
    document.querySelector("#itemNotFound").innerHTML = "לא נמצא מוצר";
  }
  document.querySelector("#updateName").value = "";
  document.querySelector("#updatePrice").value = "";
  document.querySelector("#updateUnits").value = "";
  document.querySelector("#updateImgUrl").value = "";
};
