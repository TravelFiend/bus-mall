export const findById = (items, id) => {
    items.forEach(item => {
        if (item.id === id) {
            return item;
        }
    });
};

export const incrementShowCount = () => {
    
};

export const incrementClickCount = () => {

};