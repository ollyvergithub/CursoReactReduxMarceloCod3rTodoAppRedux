export function changeValue(e) {
    console.log("Ollyver fieldActions changeValue e ", e)
    console.log("Ollyver fieldActions changeValue e.target.value ", e.target.value)
    return{
        type: 'VALUE_CHANGED',
        payload: e.target.value,

    }

}