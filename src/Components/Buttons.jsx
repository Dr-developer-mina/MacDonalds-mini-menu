import React from "react";
import { items } from "./data";

const Buttons = ({ filter , allData }) => {
  return (
    <>
      <div
        className="btn-group "
        role="group"
        aria-label="Default button group"
      >
          <button onClick={()=>{allData(items)}} type="button" className="btn btn-outline-dark">
          All
        </button>
        <button
          onClick={() => {
            filter("Beef");
          }}
          type="button"
          className="btn btn-outline-dark"
        >
          Beef
        </button>
        <button onClick={()=>{filter("Chicken")}} type="button" className="btn btn-outline-dark">
          Chicken
        </button>
        <button onClick={()=>{
            filter("Happy Meal")
        }} type="button" className="btn btn-outline-dark">
          Happy Meal
        </button>

        <button
          onClick={() => {
            filter("McCafe");
          }}
          type="button"
          className="btn btn-outline-dark"
        >
          McCafe
        </button>
      </div>
    </>
  );
};

export default Buttons;
