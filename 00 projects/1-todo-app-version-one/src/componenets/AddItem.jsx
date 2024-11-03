import { useState } from "react";

function AddItem({ addItemValue }) {
  const [itemValue, setItemValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const changeItemValue = (e) => {
    setItemValue(e.target.value);
  };

  const changeDateValue = (e) => {
    setDateValue(e.target.value);
  };

  return (
    <div className="container text-center item-container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Item"
            value={itemValue}
            onChange={(e) => {
              changeItemValue(e);
            }}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dateValue}
            onChange={(e) => {
              changeDateValue(e);
            }}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success my-btn"
            onClick={(e) => {
              addItemValue(itemValue, dateValue);
              setItemValue("");
              setDateValue("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddItem;
