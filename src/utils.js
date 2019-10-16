// always returning null?
export const findById = (items, id) => {
    items.forEach(item => {
        if (item.id === id) {
            return item;
        }
    });
    return null;
};

export const incrementShowCount = () => {
    
};

export const incrementClickCount = () => {

};