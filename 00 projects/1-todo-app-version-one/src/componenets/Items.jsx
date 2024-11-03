const Items = ({listItems,removeItem}) => {
  console.log(listItems);
  return listItems.map((item,key) => {
    return (
      <div className="container item-container" key={key}>
        <div className="row">
          <div className="col-6 item-row">{item.name}</div>
          <div className="col-4 item-row">{item.date}</div>
          <div className="col-2">
            <button className="btn btn-danger my-btn" onClick={()=>{removeItem(key)}}>Delete</button>
          </div>
        </div>
      </div>
    );
  });
};
export default Items;
