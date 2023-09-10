import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [id, setId] = useState(0);

    let navigate = useNavigate('');
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post('https://dummyjson.com/products/add', {
            title, // title : title in E6 writes title  directly
            price,
            description,
            brand,
            id
            /* other product data */
        }).then((data) => console.log(data));
        navigate('/products', { state: { title, price, description, brand, id } })
    }
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Add Product Details
                </h1>
                <form
                    onSubmit={formSubmit}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <div className="relative">
                        <label htmlFor="id" className="sr-only">Product ID</label>
                        <input
                            required
                            type="boolean"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Id of the Product"
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className="relative">
                            <label htmlFor="text" className="sr-only">Product Name</label>
                            <input
                                required
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Title of The Product"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="price" className="sr-only">Price</label>
                        <div className="relative">
                            <input
                                required
                                type="boolean"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="price of The Product"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <label htmlFor="text" className="sr-only">Product brand</label>
                            <input
                                required
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="brand Name of the Product"
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="id" className="sr-only">description</label>
                        <div className="relative">
                            <textarea
                                rows="4"
                                cols="50"
                                required
                                name="description"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="description of The Product"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:scale-105"
                    >
                        ADD Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProducts;
{/* <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">ADD</button> */ }
