import React from "react";
import { useReducer } from "react";
function formReducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.feild]: action.payload };
    case "reset":
      return { ...state, email: "", password: "" };
    default:
      return "invalid action type";
  }
}
function FormData() {
  let [state, dispatch] = useReducer(formReducer, { email: "", password: "" });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(state);
  }
  function handleChange(event) {
    let { name, value } = event.target;
    dispatch({ type: "update", feild: name, payload: value });
  }
  return (
    <>
      <h3>Form Data Handling Using useReducer....</h3>
      <div style={{ display: "grid", gap: "10px" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px" }}>
            <label></label>
            <input
              style={{ padding: "12px", width: "200px" }}
              type="email"
              name="email"
              value={state.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label></label>
            <input
              style={{ padding: "12px", width: "200px" }}
              type="password"
              name="password"
              value={state.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => dispatch({ type: "reset" })}>Reset Form</button>
      </div>

      {!state.email && !state.password && (
        <div style={{ margin: "10px" }}>No Details Found</div>
      )}
      {state.email && state.password && (
        <div style={{ margin: "20px", fontSize: "20px" }}>
          <div>User Email : {state.email}</div>
          <div>User Password : {state.password}</div>
        </div>
      )}
    </>
  );
}
export { FormData };
