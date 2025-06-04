import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/action";

function FetchData() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <div>Data Fetch Using Redux Thunk..</div>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Failed To fetch Data ...</p>}
      <div id="items">
        {state.data &&
          state.data.map((item, index) => (
            <div  id="item" key={index}>
              <h3>Title : {item.title}</h3>
              <p>Id : {item.id}</p>
              <p>Completed : {item.completed ? "YES" : "NO"}</p>
            </div>
          ))}
      </div>
    </>
  );
}
export { FetchData };
