import { Link, Outlet } from "react-router-dom";
import { getProducts } from "./Api/Api";
import { useEffect, useState } from "react";
const Products = () => {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const productData = await getProducts();
        setProducts(productData);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products);
    return (
        <div className="w-full h-screen flex">
            <div className="w-full bg-gray-800 lg:w-1/4 lg:h-screen border-t-2">
                <ul className="flex flex-col items-center gap-3 group text-white p-3 text-sm">
                    <li>
                        <Link to="/products/add">Add Products</Link>
                    </li>
                    <li>
                        <Link to="/products/categories">Get Categories</Link>
                    </li>
                </ul>
            </div>
            <table className=" container divide-y-2 divide-gray-200 bg-white text-sm">
                <thead>
                    <tr className="flex justify-center ">
                        <th className="w-1/4 whitespace-nowrap  py-2 font-medium text-gray-900">
                            ID
                        </th>
                        <th className="w-1/4 whitespace-nowrap  py-2 font-medium text-gray-900">
                            TITLE
                        </th>
                        <th className="w-1/4 whitespace-nowrap  py-2 font-medium text-gray-900">
                            Price
                        </th>
                        <th className="w-1/4 whitespace-nowrap  py-2 font-medium text-gray-900">
                            brand
                        </th>
                        <th className="w-1/4 whitespace-nowrap  py-2 font-medium text-gray-900"> operation </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 py-8">
                    {
                        products.slice(0, 18).map((product) => {
                            return (
                                <tr className="flex justify-center" key={product.id}>
                                    <td className="w-1/4 whitespace-nowrap text-center py-2 font-medium text-gray-900">
                                        {product.id}
                                    </td>
                                    <td className="w-1/4 whitespace-nowrap text-center py-2 text-gray-700">
                                        {product.title.slice(0, 10)}
                                    </td>
                                    <td className="w-1/4 whitespace-nowrap text-center  py-2 text-gray-700">
                                        {product.price}
                                    </td>
                                    <td className="w-1/4 whitespace-nowrap text-center py-2 text-gray-700">
                                        {product.brand.slice(0, 10)}
                                    </td>
                                    <td className="whitespace-nowrap text-center py-2 text-gray-700">
                                        <Link to={`/products/${product.id}`} className="rounded border border-current ml-2 px-5 py-2 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-indigo-700 active:text-red-500">View</Link>
                                        <button className="rounded border border-current ml-2 px-5 py-2 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-indigo-700 active:text-red-500">Edit</button>
                                        <button className="rounded border border-current ml-2 px-5 py-2 text-sm font-medium text-red-600 transition hover:scale-110 hover:shadow-xl focus:outline-red-600 active:text-indigo-500">Delete</button>

                                    </td>
                                </tr>
                            )

                        })
                    }

                </tbody>
            </table>

            <Outlet />
        </div >
    );
}
export default Products;