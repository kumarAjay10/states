import React from "react"; 
import { useState } from "react";



const FormBasic = ()=>{
    
       let[name,setName]=useState("");

       const handleInput =(e)=>{
        setName(e.target.value)  
    }  
       
    
    
    return(
        <div>
                 <form>
                    <input type="text" placeholder="Enter Name"
                    onChange={handleInput}/>
                 </form>

                
        </div>
    )
}

export default FormBasic;



// method 1
 {/* <p>hello {name}</p> */}


  // method 2 printing after one input variable
  {/* {name!="" ? <p>hello{name}</p> : ""} */}