import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../components/register";
import Login from "../components/login";
import ItemDetail from "../components/store/detail";
import NotFound from "./error/notfound";
import Products from "../screen/admin/products";
import Reports from "./admin/reports";
import HomeAdmin from "./admin/home";
import MainApp from "../screen/main";
import  AppBarHeading  from "../widget/appbar/appbarheading";
import { makeStyles } from "@material-ui/core";



const MainRoutes = () => {

  const url = window.location.pathname;
  if (url.search("/admin") === 0) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={HomeAdmin} />
          <Route path="/admin/products" component={Products} />
          <Route path="/admin/reports" component={Reports} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <AppBarHeading/>
        <Switch>
          <Route exact path="/" component={MainApp} />
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
