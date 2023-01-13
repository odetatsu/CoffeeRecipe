import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeNabvar from "./component/Header/HomeNavbar";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import Login from './component/Login/Login';
import AddGear from './component/Gear/AddGear/App';
import BrewedListApp from './component/Brewed/BrewedList/BrewedListApp';

const RecipeStep = React.lazy(() => import("./component/Recipe/UseRecipe/RecipeStep"));
const UseRecipe = React.lazy(() => import("./component/Recipe/UseRecipe/UseRecipe")); 
const BeansListApp = React.lazy(() => import("./component/Materials/BeansList/BeansListApp")); // 追加
const RecipeList = React.lazy(() => import("./component/Recipe/RecipesList/RecipeList"));
const AddBeans = React.lazy(() => import("./component/Materials/AddBeans/App"));
const ModBeans = React.lazy(() => import("./component/Materials/ModBeans/App"));
const AddRecipe = React.lazy(() => import("./component/Recipe/AddRecipe/App"));
const AddRecipeSteps = React.lazy(() => import("./component/Recipe/AddRecipe/AddRecipeSteps"));
const GearListApp = React.lazy(() => import("./component/Gear/GearList/GearListApp"));


const Routers = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login"  element={<Login />} />
        <Route path="/" element={<HomeNabvar />}>
          <Route index element={<RecipeList />} />
          <Route path="/CoffeeBeans" element={<BeansListApp />} />
          <Route path="/addbeans" element={<AddBeans />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/addrecipe/steps" element={<AddRecipeSteps />} />
          <Route path="/modbeans/:id" element={<ModBeans />} />
          <Route path="/modrecipe/:id" element={<ModBeans />} />
          <Route path="/userecipe/:id" element={<UseRecipe />} />
          <Route path="/userecipe/:id/steps"  element={<RecipeStep />} />
          <Route path="/gears"  element={<GearListApp />} />
          <Route path="/addgear"  element={<AddGear />} />
          <Route path="/brewed"  element={<BrewedListApp />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default Routers;
