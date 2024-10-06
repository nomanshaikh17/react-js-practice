function Item2() {
  let itemName = "Vegitable";
  let date = "10/6/2024";
  return (
    <div className="container item-container">
      <div className="row">
        <div className="col-6 item-row">{itemName}</div>
        <div className="col-4 item-row">{date}</div>
        <div className="col-2">
          <button className="btn btn-danger my-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Item2;
