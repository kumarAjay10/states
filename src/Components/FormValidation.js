import React, { useState } from "react";

const FormValidation = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const { name, email, password, confirmPassword } = user;
  let updateUser = (e) => {
    // console.log(e.target.value,e.target.name)
    let key = e.target.name;
    setUser({ ...user, [key]: e.target.value });
  };

  // 16 january tuesday submit explanation
  let updateSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("fill the full details");
    } else if (password != confirmPassword) {
      alert("plz fill the correct password");
    } else {
      setMessage("you have succesfully submitted your form");
    }
  };

  return (
    <div>
      {message ? <h1>{message}</h1> : null}
      <form onSubmit={updateSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={updateUser}
          name="name"
        />
        <br />
        <input
          type="email"
          placeholder="Enter your mail"
          value={email}
          onChange={updateUser}
          name="email"
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={updateUser}
          name="password"
        />
        <br />
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={updateUser}
          name="confirmPassword"
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormValidation;

// method 1 but we have create function for every usestate so will be using Array of object

// let[name,setName]=useState("");
// let[email,setEmail]=useState("");
// let[password,setPassword]=useState("");
// let[confirmPassword,setConfirmPassword]=useState("");

// we can use this method also but after writng line no 8 we can use just user to access the value of the items in object
// value={user.name}   value={user}

// we can make a single function by making key value and input keyvalue and name should be same

// let handleName = (e)=>{
//     setUser({...user,name:e.target.value})
// }
// let handleEmail = (e)=>{
//  setUser({...user,email:e.target.value})
// }
// let handlePassword = (e)=>{
//  setUser({...user,password:e.target.value})
// }
// let handleConfirmPassword = (e)=>{
//  setUser({...user,confirmPassword:e.target.value})
// }
