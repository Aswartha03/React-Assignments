import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { dataFetcher } from "../redux/reducer";


export function FetchData() {
  let {loading,data,error} = useSelector((state) => state);
  let dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(dataFetcher())
//   }, [dispatch]);
//   console.log("Data",data)

  return (
    <>
      <div>Data Fetch Using Redux Thunk..</div>
      {loading && <p>Loading...</p>}
      {error && <p>Failed To fetch Data ...</p>}
      <button onClick={()=>dispatch(dataFetcher())}>Click me to fetch</button>
      <div id="items">
        {data &&
          data.map((item, index) => (
            <div  id="item" key={index}>
              <h3>Name : {item.name}</h3>
              <p>Url : {item.url}</p>
            </div>
          ))}
      </div>
    </>
  );
}

