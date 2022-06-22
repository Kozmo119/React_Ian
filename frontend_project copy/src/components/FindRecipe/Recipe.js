import { useParams } from "react-router-dom";

const Recipe = ({ recipes2 }) => {
  const params = useParams();

    let filterChecker;
    
    if (recipes2.length) {
      filterChecker = recipes2.filter((recipe) => {
        if (recipe.id == params.recipeId) {
            console.log("filter found something")
            return recipe.name;}
      })
    }


  return (
    <>
      <p>paramsId = {params.recipeId}</p>
      {console.log(recipes2)}
      {recipes2.length ? <h1>{filterChecker[0].name}</h1> : ""}
    </>
  );
};
      
export default Recipe;

/*{Object.keys(filterChecker[0]).map((key)=>{
  return (<p>{key}: {filterChecker[0][key]}</p>)
})} */