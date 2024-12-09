import React, { useEffect, useState } from "react";
import "../App.css";
import Check from "./Check";
import Radio from "./Radio";

import From from "./FormPage";
import FormPage from "./FormPage";


export default function OrderForm() {

  const fiyat= 85.50;
  
  return (
    <>
      <div className="order-banner"></div>

      <h3>Position Absolute Acı Pizza</h3>
      <div className="price-tag">
        <h2>{fiyat}₺</h2>
        <div className="rating-comment">
          <p>4.9</p>
          <p>(200)</p>
        </div>
      </div>
      <p>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </p>
      <FormPage fiyat = {fiyat} />
      
    </>
  );
}
