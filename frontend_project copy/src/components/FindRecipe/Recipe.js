import { useParams } from "react-router-dom";

const Recipe = ({ recipes2 }) => {
  const params = useParams();
  console.log(params.recipeId)
  const filterChecker = recipes2.filter((recipe) => {
        if (recipe.id == params.recipeId) {
            console.log("hi")
            return recipe.name;
          } else {
            return false;
          }
        })
        console.log(filterChecker)
        // console.log(params.recipeId)
  

  return (
    <>
    

      <p>paramsId = {params.recipeId}</p>
      {console.log(recipes2)}
      {recipes2 ? <p>{filterChecker[0]} </p> : ""}
      {/* <h1>{filterChecker[0].name}</h1> */}
    
    </>
  );
};
      
export default Recipe;
