import Heading from './components/Heading';
import AddItem from './components/AddItem';
import List from './components/List';
import Conatiner from './components/Container';
import React, { useState } from 'react';
import './App.css'

function App() {
  const [list, setList] = useState([]
  //   [{
  //   name: 'Bread',
  //   status: 0
  // },
  // {
  //   name: 'Cheese',
  //   status: 1
  // },
  // {
  //   name: 'Cofee',
  //   status: 1
  // }]
);

  function purchase(name, cl, strikeclass,index) {
    const listItem = document.querySelector('.' + cl);
    let newList;
    if (listItem) {
      listItem.classList.toggle(strikeclass);
     newList = list.map((item, i) =>
        i === index ? { ...item, status: item.status === 1 ? 0 : 1 } : item
      );
    }
    setList(newList)
  }
  function addItem(value){
    let newItem = {
      name: value,
      status: 1
    }
    const newList = [...list,newItem]
    setList(newList)
  }
  return (
    <center>

      <Conatiner>
        {/* <Heading/> */}
        <AddItem addItem={addItem}></AddItem>
        <List list={list} purchase={purchase} />
      </Conatiner>
    </center>

  )
}

export default App
