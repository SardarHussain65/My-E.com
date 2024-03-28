import "./style.css";

import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);

// Define the searchProduct function
window.searchProduct = function () {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const searchedProducts = products.filter((product) =>{
    console.log(product.category, searchValue);
     return product.category.toLowerCase().startsWith(searchValue);
    });
    console.log(searchedProducts);
  showProductContainer(searchedProducts);
};
