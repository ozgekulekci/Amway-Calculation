import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name: "",
    selfBV: null,
    totalValue: null,
    sub_id: null
};

const addTotal = (state, action) => {

    const total = { ...state, totalValue: state.totalValue + action.totalValue }
    return total;

}
const addSub_id = (state, action) => {
    const sub_id = { ...state, sub_id: action.sub_id }

    return sub_id;
}
const addName = (state, action) => {
    const name = { ...state, name: action.name }
    return name;
}
const addSelfBV = (state, action) => {
    const selfBV = { ...state, selfBV: action.selfBV }
    return selfBV;
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOTAL: return addTotal(state, action);
        case actionTypes.ADD_NAME: return addName(state, action);
        case actionTypes.SELFBV: return addSelfBV(state, action);
        case actionTypes.ADD_SUB_ID: return addSub_id(state, action);

        default: return state;
    }
};

export default reducer;









