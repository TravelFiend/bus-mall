export const findById = (items, id) => {
    let match;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            match = items[i];
        }
    }
    return match;
};