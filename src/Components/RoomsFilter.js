import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

export default function RoomsFilter({ rooms }) {
  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  //get unique types from rooms
  let types = getUnique(rooms, "type");
  // add 'all' to the types array
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  let capacities=getUnique(rooms,"capacity");
  capacities=capacities.map((item,index)=><option value={item} key={index}>{item}</option>)


  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
         {/* select guest */}
         <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>
        {/* end of select guest */}
      </form>
    </section>
  );
}
