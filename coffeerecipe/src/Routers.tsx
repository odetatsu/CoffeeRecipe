import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeNabvar from "./Header/HomeNavbar";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import RecipeStep from './component/UseRecipe/RecipeStep';

const NumberInput = React.lazy(
  () => import("./component/NumberInput/NumberInputApp")
); // 追加
const UseRecipe = React.lazy(() => import("./component/UseRecipe/UseRecipe")); // 追加
const BeansListApp = React.lazy(
  () => import("./component/BeansList/BeansListApp")
); // 追加
const RecipeList = React.lazy(
  () => import("./component/RecipesList/RecipeList")
);

const Routers = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeNabvar />}>
          <Route index element={<RecipeList />} />
          <Route path="/CoffeeBeans" element={<BeansListApp />} />
          <Route path="/addrecipe" element={<NumberInput />} />
          <Route path="/userecipe/:id" element={<UseRecipe />} />
          <Route path="/userecipe/:id/steps" element={<RecipeStep />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default Routers;
