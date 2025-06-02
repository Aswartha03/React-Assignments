let initialState = { loading: null, array: null, error: null };

function fetchReducer(state=initialState,action){
    switch (action.type){
        case "Fetch_start":
            return {...state,loading:true}
        case "Fetch_Success" :
            return {...state,loading:false,array:action.data,error:null}
        case "Error" :
            return {...state,loading:false,array:null,error:action.error}
        default :
            return state
    }
}
export {fetchReducer}
