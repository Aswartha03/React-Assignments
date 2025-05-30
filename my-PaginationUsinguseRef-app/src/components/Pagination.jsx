import React, { useEffect, useState, useRef, use } from "react";
let limit = 10;
function Pagination() {
  let [arr, setArr] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let inputRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        let result = await response.json();
        setArr(result);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []);
  // Logic
  let totalPages = Math.ceil(arr.length / limit);
  console.log(arr, totalPages);

  let end = limit * currentPage;
  let start = end - limit;
  let dataArray = arr.slice(start, end);
  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage((currentPage -= 1));
    }
  }
  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage += 1));
    }
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.color = "red";
      inputRef.current.style.fontSize = "25px";
    }
  }, [currentPage]);
  return (
    <>
      <div>
        <h2>Pagination Page using useRef..</h2>
      </div>

      <p ref={inputRef}>Current Page : {currentPage}</p>
      <div id="items">
        {dataArray.map((item, index) => (
          <div  key={index}>
            <h3>Title : {item.title}</h3>
            <p>ID : {item.id}</p>
            <p>Completed : {item.completed ? "✅" : "❌"}</p>
          </div>
        ))}
      </div>
      <button disabled={currentPage == 1} onClick={handlePrev}>
        Prev
      </button>
      <button disabled={currentPage == totalPages} onClick={handleNext}>
        Next
      </button>
    </>
  );
}
export default Pagination;
