import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNabvar from "./Header/HomeNavbar";
import RecipeList from "./component/RecipeList";
import { useDispatch } from 'react-redux';
import {increment} from "./Store/counterSlice"
import { TimerApp } from './component/StopWatch/Timer';
const Login = () => <h1>Login</h1>;

const Routers = () => {
  const dispatch = useDispatch();

  dispatch(increment());
  return (
    <>
      <HomeNabvar />
      <BrowserRouter>
        <Routes>
          <Route path="CoffeeBeans" element={<TimerApp />} />
          <Route path="login" element={<Login />} />
          <Route index element={<RecipeList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
