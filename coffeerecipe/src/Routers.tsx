import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNabvar from "./Header/HomeNavbar";
import { AnimatePresence } from "framer-motion";
import * as React from "react";

const NumberInput = React.lazy(() => import("./component/NumberInput/App")); // 追加
const UseRecipe = React.lazy(() => import("./component/UseRecipe/UseRecipe")); // 追加
const Scalebar = React.lazy(() => import("./component/BeansEdit/Scalebar")); // 追加
const RecipeList = React.lazy(
  () => import("./component/RecipesList/RecipeList")
);

const Routers = () => {
  return (
    <>
      <Router>
        <AnimatePresence initial={true}>
          <Routes>
            <Route path="/" element={<HomeNabvar />}>
              <Route index element={<RecipeList />} />
              <Route path="/CoffeeBeans" element={<Scalebar />} />
              <Route path="/addrecipe" element={<NumberInput />} />
              <Route path="/userecipe" element={<UseRecipe />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
};
export default Routers;
