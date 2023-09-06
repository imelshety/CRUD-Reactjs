import axios from "axios";

export let getProducts = async () => {
  let products = await axios.get("https://dummyjson.com/products");
  return products.data.products;
};
// Api for get onePorduct
// export let getProduct = async (productId) => {
//   let category = await axios.get(`https://dummyjson.com/products/${productId}`);
//   return category.data;
// };
