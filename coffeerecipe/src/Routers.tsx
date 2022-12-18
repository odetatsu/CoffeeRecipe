import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNabvar from "./Header/HomeNavbar";
import RecipeList from "./component/RecipesList/RecipeList";
import { useDispatch } from "react-redux";
import { Scalebar } from "./component/BeansEdit/Scalebar";
import { setRecipeKey } from "./Store/recipeSlice";
import { UseRecipe } from "./component/UseRecipe/UseRecipe";
import { NumberInput } from "./component/NumberInput/App";
import { AnimatePresence } from "framer-motion";

const Routers = () => {
  const dispatch = useDispatch();

  dispatch(setRecipeKey(1));
  return (
    <>
      <Router>
        <AnimatePresence initial={true}>
          <Routes>
            <Route path="/" element={<HomeNabvar />}>
              <Route index element={<RecipeList />} />
              <Route path="CoffeeBeans" element={<Scalebar />} />
              <Route path="addrecipe" element={<NumberInput />} />
              <Route path="userecipe" element={<UseRecipe />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
};
export default Routers;
