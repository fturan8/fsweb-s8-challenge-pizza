import React, { useEffect, useState } from "react";
import "../App.css";
import Check from "./Check";

export default function OrderForm() {
  const ekMalzemeler = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Sucuk",
  ];
  return (
    <>
      <div className="order-banner"></div>

      <h3>Position Absolute Acı Pizza</h3>
      <div className="price-tag">
        <h2>85.50₺</h2>
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
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
      <div style={{ gap: "100px" }}>
        <div>
          <h3>Boyut Seç</h3>

          <div style={{ display: "block" }}>
            <label>
              <input type="radio" name="boyut" />
              Büyük
            </label>
            <label>
              <input type="radio" name="boyut" />
              Orta
            </label>
            <label>
              <input type="radio" name="boyut" />
              Küyük
            </label>
          </div>
        </div>
        <div>
          <h3>Hamur Seç</h3>
          <form>
            <select name="hamur">
              <option>ince</option>
              <option>orta</option>
              <option>kalın</option>
            </select>
          </form>
        </div>
      </div>
      <div>
        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div>
          {ekMalzemeler.map((malzeme) => (
            <Check
              key={malzeme}
              fieldName="ekMalzemeler"
              value={malzeme}
              label={malzeme}
            />
          ))}
        </div>
      </div>
    </>
  );
}
