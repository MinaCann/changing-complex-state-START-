import React, { useState } from "react";
function App() {
  const [fullName,setFullName]=useState({fName:"",lName:""});
  
  function handleChange(event){
    const newValue = event.target.value
    // We need this to understand where the change is happening
    const inputName=event.target.name
    //prevValue hold fName and lName values
    
    setFullName(prevValue =>{
      console.log(prevValue);//{fName: 'aby', lName: 'gh'}
      console.log(prevValue.fName)//aby
      console.log(prevValue.lName)//g
      // fName     prevValue.fName    lName       prevValue.lName             prevValue
      // abc           ab                            ""               
      // abc           ab            bayram        bayra                 {lName: 'bayra'}
      if(inputName==='fName'){
        // if there is a chagne in fName
        // return fName with latest newValue
        // return lName with the oldest previous value
        return {
          fName: newValue,
          lName: prevValue.lName
         
        }
      }
      else if(inputName==='lName'){
        return {
          fName:prevValue.fName,
          lName: newValue
        }
      }
    })
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
        onChange={handleChange}
        name="fName" 
        placeholder="First Name" 
        value={fullName.fName}
        />
        <input 
        onChange={handleChange}
        name="lName" 
        placeholder="Last Name" 
        value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;