import { useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AddItem({ handleFormSubmit }) {

  const itemElement = useRef();
  const dateElement = useRef();

  
  const submitForm = (e)=>{
    handleFormSubmit(e,itemElement.current.value,dateElement.current.value);
    itemElement.current.value="";
    dateElement.current.value="";
  }

  return (
    <div className="container text-center item-container">
      <form action="" onSubmit={submitForm}>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Item"
            ref={itemElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dateElement}
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
