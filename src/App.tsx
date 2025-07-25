import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import DetailsProduct from "./pages/DetailsProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Promo from "./pages/Offers";
import Product from "./pages/Product";
import ProductListByCategory from "./pages/ProductListByCategory";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<DetailsProduct />}></Route>
        <Route path="/categories" element={<Category />}></Route>
        <Route
          path="/categories/:id"
          element={<ProductListByCategory />}
        ></Route>
        <Route path="/offers" element={<Promo />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
