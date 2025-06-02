function fetchData(){
    return async (dispatch)=>{
        dispatch({type:"Fetch_start"})
        try {
            let response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee")
            let result = await response.json()
            result = result.data 
            dispatch({type:"Fetch_Success",data:result})
        } catch (error) {
            dispatch({type:"Error",error:error.message})
        }
    }
}
export {fetchData}