import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import RecipeList from "./component/RecipeList";
import ComponentB from "./component/sample";

const Login = () => <h1>Login</h1>;

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet></Outlet>}>
            <Route path="page2" element={<ComponentB />} />
            <Route path="login" element={<Login />} />
            <Route index element={<RecipeList />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};
export default Routers;
