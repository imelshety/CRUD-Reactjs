import axios from "axios";

export let getProducts = async () => {
  let products = await axios.get("https://dummyjson.com/products");
  return products.data.products;
};
