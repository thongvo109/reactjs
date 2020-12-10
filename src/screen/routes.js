import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../components/register";
import Login from "../components/login";
import Home from "../home";
import ItemDetail from "../components/store/detail";
import NavBar from "./../components/home/nav";
import NotFound from "./error/notfound";
import AdminScreen from "./admin/index";
import NavAdmin from "../components/home/nav-admin";
import Products from "../screen/admin/products";
import Reports from "./admin/reports";

const MainRoutes = () => {
  const url = window.location.pathname;
  if (url.search("/admin") === 0) {
    return (
      <BrowserRouter>
        <NavAdmin />
        <Switch>
          <Route exact path="/admin" component={AdminScreen} />
          <Route path="/admin/products" component={Products} />
          <Route path="/admin/reports" component={Reports} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/courses/:slug" component={ItemDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default MainRoutes;
