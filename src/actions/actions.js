import * as actionTypes from './actionTypes';

export const addSub_id = (sub_id) => {
    return async function (dispatch) {
        const cardId = localStorage.setItem('ID', sub_id);
        dispatch({ type: actionTypes.ADD_SUB_ID, payload: cardId })
    }
}
export const addName = (name) => {
    return async function (dispatch) {
        const selfName = localStorage.setItem('name', name);
        dispatch({ type: actionTypes.ADD_NAME, payload: selfName })
    }
}
export const addSelfBV = (selfBV) => {
    return async function (dispatch) {
        const BV = localStorage.setItem('selfBV', selfBV);
        dispatch({ type: actionTypes.SELFBV, payload: BV })
    }
}

export const addTotal = (totalValue) => {
    return async function (dispatch) {
        const total = localStorage.setItem('total', totalValue);
        dispatch({ type: actionTypes.TOTAL, payload: total })
    }
}







