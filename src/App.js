import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/HomePage";
import ContactUs from "./pages/home/ContactUs";
import Products from "./pages/products/ProductsPage";
import About from "./pages/about/AboutPage";
import Admin from "./pages/admin/AdminPage";
import AdminLogin from "./pages/admin/AdminLoginPage";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Enquiries from "./pages/admin/EnquiriesPage";
import Orders from "./pages/admin/OrdersPage";
import ProductsInventory from "./pages/admin/ProductsInventory";
import AdminNav from "./pages/admin/AdminNav";
import "./index.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminRoutes} />
        <Route path="/" component={DefaultRoutes} />
      </Switch>
    </Router>
  );
}

export default App;

const AdminRoutes = () => {
  return (
    <div id="App">
      <AdminNav />
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route path="/admin/productsInventory" component={ProductsInventory} />
        <Route path="/admin/enquiries" component={Enquiries} />
        <Route path="/admin/orders" component={Orders} />
      </Switch>
    </div>
  );
};

const DefaultRoutes = () => {
  return (
    <div id="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/adminLogin" component={AdminLogin} />
      </Switch>

      <Footer />
    </div>
  );
};
