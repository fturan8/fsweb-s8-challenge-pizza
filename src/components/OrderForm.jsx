import React, { useEffect, useState } from "react";
import "../App.css";
import FormPage from "./FormPage";
import { product } from "../dataList.js";


export default function OrderForm() {
  //console.log(product);
  return (
    <>
      <div className="order-banner">
        <img src="../../images/iteration-1-images/logo.svg"  />
      </div>

      <h3>{product.name}</h3>
      <div className="price-tag">
        <h2>{product.fiyat}₺</h2>
        <div className="rating-comment">
          <p>{product.rating}</p>
          <p>{`(${product.countOfComment})`}</p>
        </div>
      </div>
      <p>
        {product.description}
      </p>
      <FormPage product = {product} />
      
    </>
  );
}
