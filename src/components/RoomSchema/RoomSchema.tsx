import axios from "axios";
import { useEffect, useState } from "react";
import "./RoomSchema.scss";
import Table from "../Table";

export default function RoomSchema() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios.get("/data/tables.json").then((response) => {
      setTables(response.data);
    });
  }, []);

  return (
    <div className="room-schema container">
      <div className="room-schema__tables">
        {tables.map((table) => (
          <Table
            key={table.id}
            seats={table.seats}
            number={table.number}
            status={table.status}
            // orientation={table.number % 2 === 0 ? "horizontal" : "vertical"}
            reservedSeats={table.reservation ? table.reservation.guests : 0}
          />
        ))}
      </div>
    </div>
  );
}
