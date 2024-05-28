const recipesData = project.data.find(
    d => d.id === "recipes"
);
const itemsData = project.data.find(
    d => d.id === "items"
);
const recipes = recipesData.objects;
const items = itemsData.objects;

const queryResult = items.map(
    (item, itemindex) => {
        const resultingRecipes = recipes
            .filter(recipe => recipe.c.name === item.name)
            .map(recipe => `recipes#${recipe.name}`);

        return {
            name: item.name,
            description: item.description,
            item: `items#${item.name}`,
            recipes: resultingRecipes
        };
    }
);

return {
    id: "items-and-resulting-recipes",
    name: "Items and Resulting Recipes",
    description: "List of all items, and the recipes that use them",
    result: queryResult,
    schema: "s/ItemAndResultingRecipes",
};
