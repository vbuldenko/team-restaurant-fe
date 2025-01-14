import classNames from "classnames";
import "./Table.scss";

const Table = ({
  seats,
  number,
  status,
  orientation = "horizontal",
  reservedSeats = 0,
}) => {
  const tableWidth = seats * 50;

  const renderTopChairs = () => {
    const halfSeats = Math.ceil(seats / 2);
    const chairs = [];
    for (let i = 0; i < halfSeats; i++) {
      chairs.push(
        <div
          key={`top-${i}`}
          className={classNames("table__chair", {
            "table__chair--reserved": i < reservedSeats,
          })}
        ></div>
      );
    }
    return chairs;
  };

  const renderBottomChairs = () => {
    const halfSeats = Math.ceil(seats / 2);
    const chairs = [];
    for (let i = 0; i < seats - halfSeats; i++) {
      chairs.push(
        <div
          key={`bottom-${i}`}
          className={classNames("table__chair", "table__chair--bottom", {
            "table__chair--reserved": i + halfSeats < reservedSeats,
          })}
        ></div>
      );
    }
    return chairs;
  };

  return (
    <div
      className={classNames(
        "table",
        `table--${status}`,
        `table--${orientation}`
      )}
      style={{ width: `${tableWidth}px` }}
    >
      <div className="table__number">{number}</div>
      <div className="table__chairs table__chairs--top">
        {renderTopChairs()}
      </div>
      <div className="table__chairs table__chairs--bottom">
        {renderBottomChairs()}
      </div>
      <div className="table__status">{status}</div>
    </div>
  );
};

export default Table;
