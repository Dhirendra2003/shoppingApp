//import React from 'react'
import { Link } from "react-router-dom";


export default function LoginMain() {
 
  const login = async (e) => {
    e.preventDefault();
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pwd").value;
    

    let userObj = {
      password: password,
      email: email,
    };
    console.log(userObj);
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    const respdata = await response.json();
    window.alert(JSON.stringify(respdata.remark));
    if(respdata.success){
     
      console.log("redirected");
      localStorage.setItem('auth-token',respdata.token)
     window.location.replace("/"); 
    }
  };
  return (
    <div className=" w-full  p-20  bg-gradient-to-b from-purple-400/70">
      <div className="w-[50vw] m-[auto] p-10 bg-white shadow-2xl rounded-lg">
        <h1 className="text-[1.5em] font-bold">Login </h1>

        <div className="input">
          <input
            id="mail"
            type="email"
            name="email"
            placeholder="E-mail"
            className="border-2 rounded-lg my-3 p-2 w-full m-auto]"
          />
          <input
            id="pwd"
            type="password"
            name="pass"
            placeholder="password"
            className="border-2 rounded-lg my-3 p-2 w-full m-auto]"
          />
        </div>
        <div>
          <button className="flex bg-red-500 text-white rounded-full p-3 text-[1em] px-5 my-3 mx-[auto]" onClick={(e)=>login(e)}>
            Login
          </button>

          <p>
            Haven`t registered yet?{" "}
            <Link to="/login" className="text-orange-600 py-3 font-bold">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
