import React, { useEffect, useState } from "react";
import "../App.css";
import FormPage from "../components/FormPage.jsx";
import Banner from "../components/Banner.jsx";
import { product } from "../dataList.js";

export default function SiparisOnayi() {
  //console.log(product);
    return (
    <>
      
      <div className="summary-banner">
        <img src="../../images/iteration-1-images/logo.svg"  />
      </div>
        
        <div className="home-slogan">
          <h1 className="home-h1">TEBRİKLER!</h1>
          <h1 className="home-h1">SİPARİŞİNİZ ALINDI!</h1>
          {/* 
      <OrderForm />*/}
        </div>
      
    </>
  );
}
