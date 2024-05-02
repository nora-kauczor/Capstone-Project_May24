import GlobalStyle from "../styles";
import { useState } from "react";
import { recipes } from "@/lib/recipes";
export default function App({ Component, pageProps }) {
  const [bookmarkedRecipesIDs, setBookmarkedRecipesIDs] = useState([]);

  function checkIfRecipeIsBookmarked(id) {
    return bookmarkedRecipesIDs.includes(id);
  }

  function addRecipeToBookmarked(id) {
    setBookmarkedRecipesIDs([id, ...bookmarkedRecipesIDs]);
  }

  function removeRecipeFromBookmarked(id) {
    const recipeIsBookmarkedWithoutCertainID = bookmarkedRecipesIDs.filter(
      (item) => item !== id
    );

    setBookmarkedRecipesIDs(recipeIsBookmarkedWithoutCertainID);
  }

  function handleBookmarkedIcon(recipe) {
    const id = recipe.id;
    checkIfRecipeIsBookmarked(id)
      ? removeRecipeFromBookmarked(id)
      : addRecipeToBookmarked(id);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        recipes={recipes}
        onHandleBookmarkedIcon={handleBookmarkedIcon}
        bookmarkedRecipesIDs={bookmarkedRecipesIDs}
      />
    </>
  );
}