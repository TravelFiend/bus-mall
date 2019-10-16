export const findById = (items, id) => {
    let match;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            match = items[i];
        }
    }
    return match;
};
//     items.forEach(item => {
//         if (item.id === id) {
//             return item;
//         }
//     });
//     return null;
// };

// const match = userClicksAsArray.find(item => item.id === )





export const incrementShowCount = () => {
    
};

export const incrementClickCount = () => {

};