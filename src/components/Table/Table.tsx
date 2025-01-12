import classNames from "classnames";
import "./Table.scss";

const Table = ({ seats, number, status, orientation = "horizontal" }) => {
  const renderChairs = () => {
    const halfSeats = Math.ceil(seats / 2);
    const chairs = [];
    for (let i = 0; i < halfSeats; i++) {
      chairs.push(
        <div key={`top-${i}`} className="table__chair table__chair--top"></div>
      );
    }
    for (let i = 0; i < seats - halfSeats; i++) {
      chairs.push(
        <div
          key={`bottom-${i}`}
          className="table__chair table__chair--bottom"
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
    >
      <div className="table__chairs">{renderChairs()}</div>
      <div className="table__desk">
        <span className="table__number">{number}</span>
      </div>
    </div>
  );
};

export default Table;
