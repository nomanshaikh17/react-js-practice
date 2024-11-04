import { useState } from "react";
import AppHeading from "./componenets/AppHeading";
import AddItem from "./componenets/AddItem";
import Items from "./componenets/Items";
import "./App.css";
function App() {
  const [items, setItems] = useState([
    { name: "Fruit", date: "10/6/24" },
    { name: "Vegitable", date: "10/6/24" },
  ]);
  
  const handleFormSubmit = (e,itemName,itemDate)=>{
    e.preventDefault();
    //following will work like  other below lines
    // Any set State function will also give previous state value
    setItems((currentList)=>{
      return [...items, { name: itemName, date: itemDate }]
    });
    
    // const newList = [...items, { name: itemName, date: itemDate }];
    // setItems(newList);
  }
  const deleteItem = (index)=>{
    const newList =[...items.slice(0,index),...items.slice(index+1)]
    setItems(newList);
  }
  return (
    <center>
      <AppHeading />
      <AddItem handleFormSubmit={handleFormSubmit} />
      <Items listItems={items} removeItem={deleteItem}></Items>
    </center>
  );
}

export default App;
