function AddItem() {
  return (
    <div className="container text-center item-container">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Item" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success my-btn">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddItem;
