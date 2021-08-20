import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "./BootstrapCss/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Menu from "./Components/Menu/Menu";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Item from "./Components/Item/Item";
import Auth from "./Components/Auth/Auth";
import Checkout from "./Components/Checkout/Checkout";
import Delivery from "./Components/Delivery/Delivery";
import { useState } from "react";
import { createContext } from "react";
import Cart from "./Components/Cart/Cart";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import OrderPlaced from "./Components/OrderPlaced/OrderPlaced";

export const UserContext = createContext();

function App() {
  const [cartData, setCartData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    message: "",
  });
  console.log(loggedInUser);

  return (
    <UserContext.Provider
      value={{
        cart: [cartData, setCartData],
        user: [loggedInUser, setLoggedInUser],
      }}
    >
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <Menu></Menu>
              <Blog></Blog>
            </Route>

            <Route path="/item/:menuId">
              <Item></Item>
            </Route>

            <Route path="/login">
              <Auth></Auth>
            </Route>

            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>

            <PrivateRoute path="/delivery">
              <Delivery></Delivery>
            </PrivateRoute>

            <PrivateRoute path="/orderPlaced">
              <OrderPlaced></OrderPlaced>
            </PrivateRoute>

            <Route path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
