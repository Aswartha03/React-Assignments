import React, { useEffect, useReducer, useState } from "react";
function loginReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { isLogin: !state.login };
    case "LOGOUT":
      return { isLogin: !state.login };
    default:
      return state;
  }
}
function Login() {
  let [state, dispatch] = useReducer(loginReducer, { isLogin: false });
  let [arr, setArr] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        let response = await fetch("https://api.first.org/data/v1/countries");
        let result = await response.json();
        result = Object.entries(result.data);

        result = result.map(([code, info]) => {
          return {
            code: code,
            country: info.country,
            region: info.region,
          };
        });
        setArr(result)      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  console.log(arr)
  return (
    <>
    <div id="items">
        {state.isLogin==false && <button onClick={()=>dispatch(state.isLogin?"LOGOUT" : "LOGIN")}>Toggle</button>}
        {state.islogin && arr.map((item,index)=>(
            <div key={index} id="item">
                <h3>{item.country}</h3>
                <p>{item.region}</p>
            </div>
        ))}
    </div>
        
    </>
  )
  

}
export { Login };
