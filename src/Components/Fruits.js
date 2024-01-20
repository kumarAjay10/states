import React,{useState} from "react";




const Fruits =()=>{

let[favouriteFruit,setFavouriteFruit]=useState(["Apple","Mango","bannana"])

let[fruit,setFruit]=useState("")

// let addFruits =(e)=>{
//       setFruit(e.target.value)
// }

let updateFruit = (e)=>{
     e.preventDefault()
    setFavouriteFruit([...favouriteFruit,fruit])
}




    return(
        <div>
            <form onSubmit={updateFruit}>
           <input type="text" placeholder="Add fruits"
                onChange={(e)=>setFruit(e.target.value)}
                value={fruit}/>
           <button type="submit">Add fruits</button>
           </form>
           {favouriteFruit.join(",")}
        </div>
    )
}


export default Fruits;
