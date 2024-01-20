import React from "react"; 
import { useState } from "react";



const FormBasic2 = ()=>{
    
       let[name,setName]=useState("");
       let[result,setResult]=useState("");
    
        console.log("name",name);
        console.log("result",result);


       const handleInput =(e)=>{
        setName(e.target.value)  
    }  

       const handleSubmit =(e)=>{
        e.preventDefault()
        setResult(name)
         setName("")
       }
    
                        //    onSubmit={handleSubmit} we can use onClick in button instead of onSubmit
    return(
        <div>     
                 <form >
                    <input type="text" placeholder="Enter Name"
                    onChange={handleInput}
                    value={name}/>

                    <button onClick={handleSubmit}>submit</button>
                 </form>


                   <p>{result}</p>
                
        </div>
    )
}

export default FormBasic2;