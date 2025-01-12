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
    <div>
      Schema
      <div className="room-schema">
        {tables.map((table) => (
          <Table
            key={table.id}
            seats={table.seats}
            number={table.number}
            status={table.status}
          />
        ))}
      </div>
    </div>
  );
}
