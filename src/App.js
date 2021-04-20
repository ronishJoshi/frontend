import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/"><b>THRIFT</b>.CO</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h2>Shopping Categories</h2>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <h4>Mens</h4>
          <ul className="categories">
            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
            
            <li>
              <Link to="/category/Pants">Pants</Link>
            </li>
            
            <li>
              <Link to="/category/Shoes">Shoes</Link>
            </li>

            <li>
              <Link to="/category/Tshirt">T-Shirts</Link>
            </li>
          </ul>

          <h4>Womens</h4>
          <ul className="categories">
            <li>
              <Link to="/category/Trousers">Trousers</Link>
            </li>

            <li>
              <Link to="/category/Blouses">Blouses</Link>
            </li>

            <li>
              <Link to="/category/Skirts">Skirts</Link>
            </li>

            <li>
              <Link to="/category/Tops">Tops</Link>
            </li>
            <li>
              <Link to="/category/Dresses">Dresses</Link>
            </li>
            <li>
              <Link to="/category/Accessories">Accessories</Link>
            </li>
          </ul>
        </aside>

                

        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>

        </main>
        <footer className="footer"><div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <div className="container py-5">
    <div className="row py-4">
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <h2><p className="font-italic"><b>THRIFT</b>.CO</p></h2>
        <ul className="list-inline mt-4">
          <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter" /></a></li>
          <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook" /></a></li>
          <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram" /></a></li>
          <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest" /></a></li>
          <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo" /></a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
        <h3 className="text-uppercase font-weight-bold mb-4">Shop</h3>
        <ul className="list-unstyled mb-0">
          <li className="mb-2"><a href="#" className="text-muted">For Women</a></li>
          <li className="mb-2"><a href="#" className="text-muted">For Men</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
        <h3 className=" text-uppercase font-weight-bold mb-4">Company</h3>
        <ul className="list-unstyled mb-0">
          <li className="mb-2"><a href="signin" className="text-muted">Sign In</a></li>
          <li className="mb-2"><a href="#register" className="text-muted">Register</a></li>
          <li className="mb-2"><a href="#" className="text-muted">Our Products</a></li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 mb-lg-0">
        <h3 className="font-weight-bold mb-4">Style is a way to say who you are without having to speak.</h3>
        <div className="p-1 rounded border">
          <div className="input-group">
            <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
            <div className="input-group-append">
              <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Copyrights */}
  <div className="bg-light py-4">
    <div className="container text-center">
      <p className="text-muted mb-0 py-2">All rights reserved.</p>
    </div>
  </div>   
        </div>
        </footer>   
      </div>
    </BrowserRouter>
  );
}

export default App;
