import {init} from '../util/DATA'
import {getItems} from './items'

export function initHandler(){
    return (dispatch) =>{
        return init().then((data) =>{
            dispatch(getItems(data))
        })
    }
}