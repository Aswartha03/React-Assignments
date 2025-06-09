import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";
import { useState } from "react";

let limit  = 4
export function FetchData() {
  let {loading,data,error} = useSelector((state) => state);
  let [currentPage,setCurrentpage] = useState(1)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);
//   console.log("Data",data)
function handlePrev(){
    if(currentPage>=2){
        setCurrentpage(currentPage-=1)
    }
}
function handleNext(){
    if(currentPage!=totalPages){
        setCurrentpage(currentPage+=1)
    }
}
    let totalPages = Math.ceil(data.length/limit) 
    let end = limit*currentPage
    let start = end-limit
    let array = data.slice(start,end)
  return (
    <>
      <div>Data Fetch Using Redux Thunk.. <span>Current Page : {currentPage}</span></div> 
      <button disabled={currentPage==1} style={{margin:"10px"}} onClick={handlePrev}>Prev</button>
      <button disabled={currentPage==totalPages} onClick={handleNext}>Next</button>
      {loading && <p>Loading...</p>}
      {error && <p>Failed To fetch Data ...</p>}
      <div id="items">
        {data &&
          array.map((item, index) => (
            <div  id="item" key={index}>
              <h3>Name : {item.name}</h3>
              <p>Url : {item.url}</p>
            </div>
          ))}
      </div>
    </>
  );
}

