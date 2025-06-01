import React, { getState } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../redux/actions/toDoActions";
import { reset } from "../redux/actions/toDoActions";
import { useEffect } from "react";
function TodoList() {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();
  let [array, setArray] = useState(JSON.parse(localStorage.getItem("list")) || []);
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(array))
  },[array])
  function handleInput(e) {
    let { name, value } = e.target;
    dispatch(update({ [name]: value }));

  }
  function handleSubmit(e) {
    e.preventDefault();
    setArray([...array,state])
    console.log(array)
    dispatch(reset())
  }
  function deleteTask(id){
    array = array.filter((item)=>item.id!==id)
    setArray(array)
    
  }
  return (
    <>
      <h4>Add ToDo</h4>
      <div id="inputForm">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="title"
              value={state.title}
              placeholder="Enter your title"
              onChange={handleInput}
            />
          </label>
          
          <label>
            <input
            id="status"
              type="text"
              name="status"
              value={state.status}
              placeholder="Enter Status (Boolean)"
              onChange={handleInput}
            />
          </label>
          <label>
            <input
              type="number"
              name="id"
              value={state.id}
              placeholder="Enter ID"
              onChange={handleInput}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div id="container">
            {array.length!=0 && array.map((item,index)=>(
                <div key={index} id="item">
                    <h3>{item.title}</h3>
                    <p>{item.status}</p>
                    <p>{item.id}</p>
                    <button onClick={()=>deleteTask(item.id)}>Delete Task</button>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}
export { TodoList };
