export const findIndexById = (collection, id) => 
    collection.findIndex(obj => obj.id === id)