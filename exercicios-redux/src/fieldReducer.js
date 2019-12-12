const INITIAL_STATE = {value:'Opa'};

export default function (state = INITIAL_STATE, action) {

    console.log("Ollyver fieldReducer state", state)
    console.log("Ollyver fieldReducer action", action)

    switch (action.type) {
        case 'VALUE_CHANGED':
            return {
                value: action.payload
            }
        default:
            return state
    }

    
}