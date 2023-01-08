import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeNabvar from "./Header/HomeNavbar";
import { AnimatePresence } from "framer-motion";
import * as React from "react";

const RecipeStep = React.lazy(() => import("./component/UseRecipe/RecipeStep"));
const NumberInput = React.lazy(() => import("./component/NumberInput/NumberInputApp"));
const UseRecipe = React.lazy(() => import("./component/UseRecipe/UseRecipe")); 
const BeansListApp = React.lazy(() => import("./component/BeansList/BeansListApp")); // 追加
const RecipeList = React.lazy(() => import("./component/RecipesList/RecipeList"));
const AddBeans = React.lazy(() => import("./component/AddBeans/App"));
const ModBeans = React.lazy(() => import("./component/ModBeans/App"));
const AddRecipe = React.lazy(() => import("./component/AddRecipe/App"));

const Routers = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeNabvar />}>
          <Route index element={<RecipeList />} />
          <Route path="/CoffeeBeans" element={<BeansListApp />} />
          <Route path="/addbeans" element={<AddBeans />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/modbeans/:id" element={<ModBeans />} />
          <Route path="/modrecipe/:id" element={<NumberInput />} />
          <Route path="/userecipe/:id" element={<UseRecipe />} />
          <Route path="/userecipe/:id/steps"  element={<RecipeStep />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default Routers;
