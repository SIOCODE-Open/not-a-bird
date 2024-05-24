const recipesData = project.data.find(
    d => d.id === "recipes"
);
const recipes = recipesData.objects;

const queryResult = recipes.map(
    (item, itemindex) => ({
        name: item.name,
        description: item.description,
        item: `recipes#${item.name}`,
        index: itemindex,
    })
);

return {
    id: "indexed-recipes",
    name: "Indexed Recipes",
    description: "List of all recipes, and their index in the game",
    result: queryResult,
    schema: "s/IndexedRecipe",
};
