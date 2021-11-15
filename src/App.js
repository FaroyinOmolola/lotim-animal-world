import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/HomePage";
import ContactUs from "./pages/home/ContactUs";
import ProductsPage from "./pages/products/ProductsPage";
import Cart from "./pages/products/Cart";
import SignIn from "./pages/user/SignIn";
import User from "./pages/user/UserPage";
import ViewOrder from "./pages/user/ViewOrder";
import Payment from "./pages/products/Payment";
import PlaceOrder from "./pages/products/PlaceOrder";
import ShippingDetails from "./pages/products/ShippingDetails";
import Register from "./pages/user/Register";
import OneProductPage from "./pages/products/OneProductPage";
import About from "./pages/about/AboutPage";
import Admin from "./pages/admin/AdminPage";
import AdminLogin from "./pages/admin/AdminLoginPage";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import EnquiryPage from "./pages/admin/EnquiriesPage";
import AppointmentPage from "./pages/admin/AppointmentPage";
import OneAppointment from "./pages/admin/OneAppointment";
import OneProduct from "./pages/admin/OneProduct";
import Orders from "./pages/admin/OrdersPage";
import ProductsPageNav from "./pages/products/ProductsPageNav";
import AddProductPage from "./pages/admin/AddProductPage";
import AdminNav from "./pages/admin/AdminNav";
import "./index.scss";
import { useSelector } from "react-redux";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={ProtectedAdminRoute} />
        <Route path="/products" component={ProductRoutes} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="/user" component={UserRoutes} />
        <Route path="/" component={DefaultRoutes} />
      </Switch>
    </Router>
  );
}

export default App;

const AdminRoutes = () => {
  return (
    <div>
      <AdminNav />
      <Route exact path="/admin" component={Admin} />
      <Route path="/admin/product/:id" component={OneProduct} />
      <Route path="/admin/addProducts" component={AddProductPage} />
      <Route path="/admin/enquiries" component={EnquiryPage} />
      <Route
        path="/admin/appointment"
        exact={true}
        component={AppointmentPage}
      />
      <Route path="/admin/appointment/:id" component={OneAppointment} />
      <Route path="/admin/orders" component={Orders} />
    </div>
  );
};

const ProtectedAdminRoute = ({ ...restOfProps }) => {
  const adminVerification = useSelector((state) => state.adminVerified);
  const { adminVerified } = adminVerification;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        adminVerified ? (
          <AdminRoutes {...props} />
        ) : (
          <Redirect to="/adminLogin" />
        )
      }
    />
  );
};

const ProductRoutes = () => {
  return (
    <div>
      <ProductsPageNav />
      <Switch>
        <Route path="/products/cart" component={Cart} />
        <Route path="/products/product/:id" component={OneProductPage} />
        <Route path="/products/shipping" component={ShippingDetails} />
        <Route path="/products/payment" component={Payment} />
        <Route path="/products/placeorder" component={PlaceOrder} />
        <Route exact={true} path="/products" component={ProductsPage} />
      </Switch>
      <Footer />
    </div>
  );
};
const UserRoutes = () => {
  return (
    <div>
      <ProductsPageNav />
      <Switch>
        <Route path="/user/signin" component={SignIn} />
        <Route path="/user/register" component={Register} />
        <Route path="/user/order" component={ViewOrder} />
        <Route exact={true} path="/user" component={User} />
      </Switch>
      <Footer />
    </div>
  );
};
const DefaultRoutes = () => {
  return (
    <div>
      <Header />

      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactUs} />
      <Route exact={true} path="/" component={Home} />

      <Footer />
    </div>
  );
};
