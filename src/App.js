import React from 'react';
import {BrowserRouter as Router,
  Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/home/home.component.js"
import {Contact} from "./components/home/home.component.js"
import Products from "./components/products/products.component.js"
import About from "./components/about/about.component.js"
import Admin from "./components/admin/admin.js"
import AdminLogin from "./components/admin/adminLogin.js"
import Header from "./Header"
import Footer from "./Footer"
import './index.scss';


class App extends React.Component {
  
  render(){
    const DefaultRoutes = ()=>{
  return (
  
      <div id="App">
      {/*{window.location.href.includes('admin') ? null : (*/}
      {/*{props.location.pathname === "/admin"? null:*/}
        
        <Header />
          <Switch>

            <Route exact path="/"> <Home /> </Route>
            <Route path="/products"> <Products /> </Route>
            <Route path="/about"> <About /> </Route>
            <Route path="/contact"> <Contact /> </Route>
            <Route path="/adminLogin"> <AdminLogin /> </Route>
          </Switch>
          {/*{window.location.href.includes('admin') ? null : (*/}
        <Footer />
     
      </div>
      )
}
      return(
        <Router>
          <Switch>
            <Route path="/admin"> <Admin /> </Route>
            <Route> <DefaultRoutes /> </Route>
          </Switch>
        </Router>
  )
}
}

export default App;






