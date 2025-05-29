import React from "react";
import { useReducer } from "react";
let initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: { cityName: "", locality: { pincode: "", landMark: "" } },
    state: "",
    coordinates: { latitude: "", longtitude: "" },
  },
  courses_offered: [],
};
function formReducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.payload };
    case "update-nested":
      return {
        ...state,
        [action.field.parent]: {
          ...state[action.field.parent],
          [action.field.child]: action.payload,
        },
      };
    case "update-nested-nested":
      return {
        ...state,
        [action.field.parent]: {
          ...state[action.field.parent],
          [action.field.child]: {
            ...state[action.field.child],
            [action.field.grandChild]: action.payload,
          },
        },
      };
    case "update-nested-nested-nested":
      return {
        ...state,
        [action.field.parent]: {
          ...state[action.field.parent],
          [action.field.child]: {
            ...state[action.field.parent][action.field.child],
            [action.field.grandChild]: {
              ...state[action.field.parent][action.field.child][action.field.grandChild],
              [action.field.GGChild]: action.payload,
            },
          },
        },
      };
    case "reset":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
}
function CollegeFormApp() {
  let [state, dispatch] = useReducer(formReducer, initialState);
  function handleChange(event) {
    let { name, value } = event.target;
    if (name.includes(".")) {
      let arr = name.split(".");
      if (arr.length == 2) {
        let [parent, child] = name.split(".");
        dispatch({
          type: "update-nested",
          field: { parent, child },
          payload: value,
        });
        return;
      } else if (arr.length == 3) {
        let [parent, child, grandChild] = name.split(".");
        dispatch({
          type: "update-nested-nested",
          field: { parent, child, grandChild },
          payload: value,
        });
        return;
      } else if (arr.length == 4) {
        let [parent, child, grandChild, GGChild] = name.split(".");
        // console.log(arr,GGChild)
        dispatch({
          type: "update-nested-nested-nested",
          field: { parent, child, grandChild, GGChild },
          payload: value,
        });
        return;
      }
    }
    dispatch({ type: "update", field: name, payload: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert("state update success");
    console.log(state);
  }
  return (
    <>
      <h3>College Form Using useReducer...</h3>
      <div id="inputForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                type="text"
                name="name"
                value={state.name}
                placeholder="Enter College Name"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              {" "}
              <input
                type="number"
                name="establishment_year"
                value={state.establishment_year}
                placeholder="Enter College establishment_year"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                id="buildingName"
                type="text"
                name="address.building"
                value={state.address.building}
                placeholder="Enter building Name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="address.street"
                value={state.address.street}
                placeholder="Enter Street Name"
                onChange={handleChange}
              />
            </label>
          </div>
          {/*  city part  */}
          <div>
            <label>
              <input
                type="text"
                name="address.city.cityName"
                value={state.address.city.cityName}
                placeholder="Enter City Name.."
                onChange={handleChange}
              />
            </label>
            {/*  locality   */}
            {/* pincode  */}
            {/* <label>
              <input
                type="number"
                name="address.city.locality.pincode"
                value={state.address.city.locality.pincode}
                placeholder="Enter the pincode"
                onChange={handleChange}
              />
            </label> */}
            {/* <label>
              <input
                type="number"
                name="address.city.locality.landMark"
                value={state.address.city.locality.landMark}
                placeholder="Enter the landmark"
                onChange={handleChange}
              />
            </label> */}
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      {!state.name && <div style={{ margin: "10px" }}>No Data Found</div>}
      {state.name && (
        <div id="formData">
          Form Data
          <h4>College Name : {state.name}</h4>
          <p>Establishment_year : {state.establishment_year}</p>
          <h5>Bulding : {state.address.building}</h5>
          <h5>Street : {state.address.street}</h5>
          <p>City Name : {state.address.city.cityName}</p>
          {/* <p>Pincode : {state.address.city.locality.pincode}</p>
          <p>Landmark : {state.address.city.locality.landMark}</p> */}
        </div>
      )}
    </>
  );
}
export { CollegeFormApp };
