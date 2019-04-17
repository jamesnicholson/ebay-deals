export const GET_ITEMS = 'GET_ITEMS'
export const GET_SUMMARY = 'GET_SUMMARY'
export function getItems(items){
    return{
        type:GET_ITEMS,
        items
    }
}
export function getSummary(summary){
    return{
        type:GET_SUMMARY,
        summary
    }
}
