export let  fetchData = ()=>{
    return async(dispatch)=>{
        dispatch({type:"fetch_start"})
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/todos")
            let result = await response.json()
            dispatch({type:"fetch_success",payload:result})
        } catch (error) {
            dispatch({type:"error",error:error.message})
        }
    }
}
