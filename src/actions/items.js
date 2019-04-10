export const GET_ITEMS = 'GET_ITEMS'

export function getItems(items){
    return{
        type:GET_ITEMS,
        items:items
    }
}