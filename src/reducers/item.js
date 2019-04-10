import {GET_ITEMS} from '../actions/items'

export default function items(state={}, action){
    switch(action.type){
        case GET_ITEMS:{
            return{
                ...state,
                ...action.items
            }
        }
        default: return state
    }

}