//import React from 'react'
import { useState } from "react";
import upload_area from "../assets/upload_area.svg";

export default function Addproduct() {
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("fileinputimg");
    const fileInput = document.getElementById("imginput");

    image.addEventListener("click", function () {
      fileInput.click();
      console.log("clicked!!");
    });
  });
  const fileInputt = document.getElementById("imginput");
  function openuploader() {
    fileInputt.click();
    console.log("clicked!!");
  }
  const [image, setImage] = useState(false);
  const [prodDetail, setProdDetail] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const changerHandler = (e) => {
    setProdDetail({ ...prodDetail, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const submitt = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const oldprice = Number(document.getElementById("price").value);
    const newprice = Number(document.getElementById("newprice").value);
    const imgpath = document.getElementById("imginput").value;
    console.log(name, category, oldprice, newprice, imgpath);

    let prodObj = {
      name: name,
      image: imgpath,
      category: category,
      new_price: newprice,
      old_price: oldprice,
    };
    console.log(prodObj);
    //img passing
    const formData = new FormData();
    formData.append("product", image);
    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      const respdata = await response.json();
      window.alert(respdata.success);
      if (respdata.success) {
        prodObj.image = respdata.image_url;
        console.log(respdata.image_url)
      }
    } catch (error) {
      console.error("Error:", error);
    }
    

    //prod obj passing
    await fetch("http://localhost:4000/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prodObj),
    }).then(() => window.alert("success"));

   
  };
  return (
    <div className=" grid w-full  mx-[auto] pl-[15vw] p-10 text-[1.5em]  place-content-center bg-black text-orange-400 font-semibold  ">
      <form action="">
        <div className="">
          product title:
          <br />
          <input
            id="name"
            onChange={changerHandler}
            type="text"
            className="w-[100%] bg-zinc-600 text-white rounded-lg p-3 text-lg"
          />
        </div>
        <div className="flex flex-wrap">
          <div>
            Price(MRP):
            <br />
            <input
              id="price"
              type="text"
              onChange={changerHandler}
              className="w-44 mr-8 bg-zinc-600 text-white rounded-lg p-3 text-lg"
            />
          </div>
          <div>
            Offer price:
            <br />
            <input
              id="newprice"
              type="text"
              onChange={changerHandler}
              className="w-44 mr-5 bg-zinc-600 text-white rounded-lg p-3 text-lg"
            />
          </div>
        </div>
        <div className="py-3">
          product category:
          <br />
          <select
            id="category"
            onChange={changerHandler}
            className=" bg-zinc-600 text-white rounded-lg p-3 text-lg"
          >
            <option value="Kid">Kids</option>
            <option value="Men">Mens</option>
            <option value="Women">Womens</option>
          </select>
        </div>
        <div>
          <label htmlFor="fileinput">
            <img
              onClick={openuploader}
              src={image ? URL.createObjectURL(image) : upload_area}
              id="fileinputimg"
              className="h-40"
            />
          </label>
          <input type="file" id="imginput" hidden onChange={imageHandler} />
        </div>
        <button
          onClick={submitt}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-[1.1em]"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
