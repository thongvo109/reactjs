import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../components/register";
import Login from "../components/login";
import Home from "../home";
import ItemDetail from "../components/store/detail";
import NavBar from "./../components/home/nav";
import NotFound from "./error/notfound";
import AdminScreen from "./admin/index";

const MainRoutes = () => {
    const url = window.location.pathname;
  if (url === "/admin") {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AdminScreen} />
          <Route path="*" component={NotFound} />
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
