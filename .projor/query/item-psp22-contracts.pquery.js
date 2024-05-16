const itemsData = project.data.find(
    d => d.id === "items"
);
const items = itemsData.objects;

const queryResult = items.map(
    item => ({
        name: item.name,
        description: `PSP-22 compatible game smart contract for element '${item.name}'`,
    })
);

return {
    id: "item-psp22-contracts",
    name: "Item PSP-22 Contracts",
    description: "List of PSP-22 compatible game smart contracts for each item in the game",
    result: queryResult,
    schema: "s/PSP22Contract",
};
