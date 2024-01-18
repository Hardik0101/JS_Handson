// Empty array for Recipe add;
const recipes = [];

// AddRecipe Function
const addRecipe = () => {
  const name = prompt("Enter Recipe Name");
  const type = prompt("Enter Recipe type");
  const description = prompt("Enter Recipe description");

  const id = recipes.length + 1;
  const recipe = { id, name, type, description };
  recipes.push(recipe);
  console.log(`Recipe with ${id} ID added successfully...`);
};

// UpdateRecipe Function
const updateRecipe = () => {
  const idUpdate = prompt("Enter the ID of the recipe to update: ");
  const recipeUpdate = recipes.find((recipe) => recipe.id == idUpdate);

  if (recipeUpdate) {
    const newName = prompt("Enter new name of recipe: ");
    const newType = prompt("Enter new type of recipe: ");
    const newDescription = prompt("Enter new description for recipe: ");

    recipeUpdate.name = newName;
    recipeUpdate.type = newType;
    recipeUpdate.description = newDescription;

    console.log(`Recipe with ${recipeUpdate.id} ID updated successfully...`);
  } else {
    console.log(`Recipe with ${idUpdate} ID not found...`);
  }
};

// DeletRecipe Function
const deleteRecipe = () => {
  const idToDelete = prompt("Enter the ID of the recipe to delete:");
  const recipeIndex = recipes.findIndex((recipe) => recipe.id == idToDelete);
  console.log(recipeIndex);

  // Splice is use to remove and add a new item in array ;
  if (recipeIndex !== -1) {
    recipes.splice(recipeIndex, 1);
    console.log(`Recipe with ${idToDelete} ID is deleted successfully...`);
  } else {
    console.log(`Recipe with ${idToDelete} ID not found...`);
  }
};

// ViewRecipe Function
const viewRecipe = () => {
  console.clear();
  let count = 1;
  if (recipes.length === 0) {
    console.log("No recipes available");
  } else {
    console.log("\nALl Recipes: ");
    recipes.forEach((recipe) => {
      recipe.id = count;
      count++;
      console.log(
        `ID: ${recipe.id}, Name: ${recipe.name}, Type: ${recipe.type}, Description: ${recipe.description}`
      );
    });
  }
};

// UserChoice Function
const userChoice = () => {
  const choice = prompt(
    "Enter your choice (1-5):\n1. Add Recipe \n2. Update Recipe\n3. Delete Recipe\n4. View Recipes \n5. Exit App"
  );
  // Use the Switch case to reapet the function for user choice.
  switch (choice) {
    case "1":
      addRecipe();
      break;
    case "2":
      updateRecipe();
      break;
    case "3":
      deleteRecipe();
      break;
    case "4":
      viewRecipe();
      break;
    case "5":
      console.log("Exiting the Food Recipe app...");
      return false;
    default:
      console.log("Invalid choice... Write a number between 1 - 5 ?");
  }
  return true;
};
