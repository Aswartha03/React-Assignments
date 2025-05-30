import React, { useState } from "react";

function DisplaySnacks() {
  let [snacks, setSnacks] = useState([]);
  async function FetchData() {
    try {
      let url =
        "https://snackshelf-eda12-default-rtdb.asia-southeast1.firebasedatabase.app/Snack.json";
      let response = await fetch(url);
      response = await response.json();
      response = Object.entries(response);
      response = response.map(([id, value]) => ({ id, value }));
      setSnacks(response);
      console.log(snacks);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <button style={{margin:"10px"}} onClick={FetchData}>Fetch Data</button>
      <div id="snacks">
        {snacks.map((snack, index) => (
          <div key={index} id="snack">
            <h3>Title: {snack.value.title}</h3>
            <p>Category: {snack.value.category}</p>
            <p>Price: {snack.value.price}</p>
            <p>Rating: {snack.value.rating}</p>
            <p>CreatedAt: {snack.value.createdAt}</p>
            <button onClick={""}>Edit Snack</button>
          </div>
        ))}
      </div>
    </>
  );
}
export { DisplaySnacks };
