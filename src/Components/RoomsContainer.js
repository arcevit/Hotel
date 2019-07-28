import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
// import { RoomConsumer, RoomProvider, RoomContext } from "../Context";
import { RoomContext } from "../Context";
import { useContext } from "react";

import Loading from "./Loading";

export default function RoomsContainer() {
  const context = useContext(RoomContext);
  const { loading, sortedRooms, rooms } = context;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortedRooms} />
        </>
      )}
      }
    </>
  );
}

// return (
//   <RoomConsumer>
//     {value => {
//       const { loading, sortedRooms, rooms } = value;
//       if (loading) {
//         return <Loading />;
//       }
//       return (
//         <>
//           <RoomsFilter rooms={rooms} />
//           <RoomsList rooms={sortedRooms} />
//         </>
//       );
//     }}
//   </RoomConsumer>
// );
