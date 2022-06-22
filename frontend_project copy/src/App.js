import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Navbar/Layout";
import Contact from "./components/Contact";
import RecipeListContainer from "./components/FindRecipe/RecipeListContainer";
import RecipeContainer from "./components/AddRecipe/RecipeContainer";
import Recipe from "./components/FindRecipe/Recipe"
import RecipeRealList from "./components/FindRecipe/RecipeRealList";
import RecipeReviewCard from "./components/FindRecipe/RecipeReviewCard";

function App() {
  
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage" exact>
          <Homepage />
        </Route>
        <Route path="/find-recipes">
          <RecipeListContainer />
        </Route>
        <Route path="/find-recipe/:recipeId">
          <RecipeRealList />
        </Route>
        <Route path="/add-recipe">
          <RecipeContainer/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
