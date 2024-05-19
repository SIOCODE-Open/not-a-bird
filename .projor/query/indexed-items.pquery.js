const itemsData = project.data.find(
    d => d.id === "items"
);
const items = itemsData.objects;

const queryResult = items.map(
    (item, itemindex) => ({
        name: item.name,
        description: item.description,
        item: `items#${item.name}`,
        index: itemindex,
    })
);

return {
    id: "indexed-items",
    name: "Indexed Items",
    description: "List of all items, and their index in the game",
    result: queryResult,
    schema: "s/IndexedItem",
};
