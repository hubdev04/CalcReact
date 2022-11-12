//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  
  // const [inputNum1,setInputNum1]=useState("");
  // const [initialVal.second_val,setInputNum2]=useState("");
  // const [resultVal,setResultVal]=useState(0);
  const [initialVal,setVal]=useState({
    first_val:"",
    second_val:"",
    result:0
  });
  const handleEvent1=(event)=>{
    const val1=event.target.value;
    const name=event.target.name;
    setVal((prev)=>{
      return {...prev,[name]:val1,result:""};
    })
    // setVal.first_val(event.target.value);
    

  }
  const handleEvent2=(event)=>{
    const val2=event.target.value;
    const name=event.target.name;
    setVal((prev)=>{
      return {...prev,[name]:val2,result:""};
    })
    // setVal.second_val(event.target.value);
    

  }
 

  const add=()=>{
    setVal((prev)=>{
      return {...prev,result:parseInt(initialVal.first_val)+parseInt(initialVal.second_val)};
    })

    // initialVal.result(parseInt(initialVal.first_val)+parseInt(initialVal.second_val));

  }

  const sub=()=>{
    setVal((prev)=>{
      return {...prev,result:parseInt(initialVal.first_val)-parseInt(initialVal.second_val)};
    })

  }
  const mul=()=>{
    setVal((prev)=>{
      return {...prev,result:parseInt(initialVal.first_val)*parseInt(initialVal.second_val)};
    })

  }
  const div=()=>{
    setVal((prev)=>{
      return {...prev,result:parseInt(initialVal.first_val)/parseInt(initialVal.second_val)};
    })

  }
  
  
  return (
    <div className='calculator'>
      <div className='inputfield'>
        <input name="first_val"  value={initialVal.first_val}  onChange={handleEvent1} screenvalue="0"/>
        <input name="second_val" value={initialVal.second_val} onChange={handleEvent2}  screenvalue="0"/>
        <p >{initialVal.result}</p>
      </div>
      <div className="Button">
            <button type='submit' onClick={add}>Add</button>
            <button type='submit' onClick={sub}>Sub</button>
            <button type='submit' onClick={mul}>Mul</button>
            <button type='submit' onClick={div}>Div</button>
        </div>
       
    </div>
  );
}

export default App;
