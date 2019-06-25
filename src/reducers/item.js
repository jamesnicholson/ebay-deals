import {GET_ITEMS, GET_SUMMARY} from '../actions/items'

export default function ebayfeed(state={}, action){
    switch(action.type){
        case GET_ITEMS:{
            return{
                ...state,
               ...action.items
            }
        }
         case GET_SUMMARY:{
                return{
                    ...state,
                    ...action.summary
                }
            }
        default: return state
    }

}