import { combineReducers } from 'redux';

const countReducer = ( initialCount = 0, action ) => {
    if (action.type === "INCREMENT"){
        return initialCount = initialCount + 1
    }

    if (action.type === "DECREMENT"){
        return initialCount = initialCount - 1
    }

    return initialCount
};

export default combineReducers({
    count: countReducer
})