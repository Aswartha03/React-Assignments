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
      <button onClick={FetchData}>Fetch Data</button>
      <div id="snacks">
        {snacks.map((snack, index) => (
          <div key={index} id="snack">
            <h3>{snack.value.title}</h3>
            <p>{snack.value.category}</p>
            <p>{snack.value.price}</p>
            <p>{snack.value.rating}</p>
            <p>{snack.value.createdAt}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export { DisplaySnacks };
