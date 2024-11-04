import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AddItem({ handleFormSubmit }) {
  const [itemValue, setItemValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const changeItemValue = (e) => {
    setItemValue(e.target.value);
  };

  const changeDateValue = (e) => {
    setDateValue(e.target.value);
  };
  
  const submitForm = (e)=>{
    handleFormSubmit(e,itemValue,dateValue);
    setItemValue("");
    setDateValue("");
  }

  return (
    <div className="container text-center item-container">
      <form action="" onSubmit={submitForm}>
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
          <button className="btn btn-success my-btn">
            <IoAddCircleSharp />
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}
export default AddItem;
