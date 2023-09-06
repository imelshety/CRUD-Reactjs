import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ContactUs from "./components/ContactUs"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />

          </>
        } />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProducts />} />
        <Route path="/products/:productID" element={<ProductDetails />} />

        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router >
  )
}

export default App