import { useState, useRef, useEffect } from "react";
import React from "react";
let limit = 4
function FetchData() {
  let [array, setArray] = useState([]);
  let [currentPage,setcurrentPage] = useState(1)
  let pageRef = useRef(1);

  useEffect(()=>(
    async function dataFetch() {
        try {
            let response = await fetch("https://rickandmortyapi.com/api/character");
            let result = await response.json();
            result = result.results;
            setArray(result);
        } catch (error) {
            alert(error.message)
        } 
      }
      

  ),[])
   
  let end = currentPage*limit 
  let start = end-limit
  let arr = array.slice(start,end)
  
  function handleNext(){
    if(end<array.length){
        setcurrentPage(currentPage+1)
        pageRef.current+=1
    }
        
  }
  function handlePrev(){
    if(pageRef.current>=2){
        setcurrentPage(currentPage-=1)
        pageRef.current-=1
    }
  }
  return (
    <>
      <div>
        <h3>Fetch Data Using useRef...</h3>
        <p>Current Page : {pageRef.current}</p>
        <div id="items">
            {arr.map((item,index)=>(
            <div key={index}>
                <h3>{item.name}</h3>
                <img src={item.image} alt="" />
                <p>{item.status}</p>
                <p>{item.gender}</p>
            </div>
        ))}
        </div>
        
        <button disabled={start==0} onClick={handlePrev} style={{margin:"10px"}}>Prev</button>
        <button disabled={end==array.length} onClick={handleNext}>Next</button>
      </div>
      
    </>
  );
}
export { FetchData };
