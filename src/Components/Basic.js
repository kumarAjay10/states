import React,{useState}from "react";
// import { useState } from "react";


let a = 10;

const Basic =()=>{

    let [count,setCount] = useState(0)
    let incCount = ()=>{
        setCount(count + 1)
    }
//      let a = 0;
     let vaCount = ()=>{
         a = a + 1;
         console.log(a);
     }

   
    return(
  <div>
          <h1>{count}</h1>
          
          <button onClick={incCount}>Increase</button>
          <h1>{a}</h1>
          <button onClick={vaCount}>Increase a</button>
  </div>
        )
}


export default Basic;


// without using usestate 
 // let a = 10;
    // let count = ()=>{
    //     a = a + 1;
    //     console.log(a);
    // }

    // // function inc(){
    // //     a=a+1;
    // //     console.log(a);
    // // }

//     console.log(useState(0));

