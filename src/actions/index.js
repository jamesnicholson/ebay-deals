import {getInitialData} from '../util/api'
import {getItems, getSummary} from './items'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function initHandler(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then((data) =>{
            dispatch(getItems(data.items))
            dispatch(getSummary(data.summary))
            dispatch(hideLoading())
        })
    }
}