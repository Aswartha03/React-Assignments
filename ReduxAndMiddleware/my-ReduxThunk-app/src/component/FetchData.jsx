import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../assets/redux/action";
let limit = 4
function FetchData() {
  let { loading, array, error } = useSelector((state) => state);
  let [currentPage,setCurrentpage] = useState(1)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);
  let totalPages = Math.ceil(array.length/limit)
  let end = limit*currentPage 
  let start = end-limit 
  let paginationArray = array.slice(start,end)
  function handleNext(){
    if(currentPage<totalPages){
        setCurrentpage(currentPage+1)
    }
  }
  function handlePrev(){
    if(currentPage>1){
        setCurrentpage(currentPage-1)
    }
  }
  return (
    <>
      <h3>Data fetching Using Redux Thunk , <span>Current Page : {currentPage}</span></h3>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Failed To Fetch...</p>}
        <div id="items">
          {array &&
            paginationArray.map((item, index) => (
              <div key={index} id="item">
                <h3>Title : {item.title}</h3>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
                <p>Price : {item.price}</p>
              </div>
            ))}
        </div>
        
        <button style={{margin:"10px"}} disabled={currentPage<=1} onClick={handlePrev}>Prev</button>
        <button disabled={currentPage==totalPages} onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
export {FetchData}
