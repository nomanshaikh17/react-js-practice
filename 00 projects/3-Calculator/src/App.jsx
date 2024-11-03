import { useState } from "react";
import OutputComponent from "./Components/OutputComponent";
import ButtonsComponent from "./Components/ButtonsComponent";
import "./App.css";

function App() {
  const [outPutValue,setOutputValue] = useState("");
  let result = 0;
  const btnClick = (value,index) =>{
    if(index==3){
      //back space
      setOutputValue(outPutValue.substring(0, outPutValue.length - 1));
    }
    else if(index==1){
      //clear all
      setOutputValue("");
    }
    else if(index==2){
      //clear all
      setOutputValue("");
    }
    else if(index==19){
      //equal;
      var values = outPutValue.split(/[X+-/]/);
      // console.log(values[0].length);
      const lastCharecter = outPutValue[outPutValue.length-1];
      if(lastCharecter=='/' || lastCharecter=='X' || lastCharecter=='+' || lastCharecter=='-'){
        setOutputValue(outPutValue.slice(0,-1))
      }
      var operations = [];
      var value_length = 0;
      for(var i = 0; i<=values.length-2;i++){
        value_length += values[i].length;
        operations.push(outPutValue[value_length+i]);
      }
      var result = 0;
      for(var i = 0; i<=operations.length-1;i++){
        if(operations[i]=='+'){
          result += parseInt(values[i])+parseInt(values[i+1]);
          values[i+1] = result;
          
        }else if(operations[i]=='-'){
          result += parseInt(values[i])-parseInt(values[i+1]);
          values[i+1] = result;
        }else if(operations[i]=='X'){
          result += parseInt(values[i])*parseInt(values[i+1]);
          values[i+1] = result;
        }else if(operations[i]=='/'){
          result += parseInt(values[i])/parseInt(values[i+1]);
          values[i+1] = result;
        }
      }
      setOutputValue(result);
      console.log(operations);
      console.log(values);
    }
    else{
      value = outPutValue+value;
      setOutputValue(value);
    }
    
  }
  let buttons = [
    "/",
    "CE",
    "C",
    "<<<",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className="main-container">
        <OutputComponent output = {outPutValue}/>
        <ButtonsComponent buttons={buttons} btnClick={btnClick}/>
      </div>
    </>
  );
}

export default App;
