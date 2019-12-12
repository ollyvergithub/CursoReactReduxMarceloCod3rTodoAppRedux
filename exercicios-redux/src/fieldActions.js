export function changeValue(e) {
    console.log("Change Value ", e)
    console.log("Change Value ", e.target.value)
    return{
        type: 'VALUE_CHANGED',
        payload: e.target.value,

    }

}