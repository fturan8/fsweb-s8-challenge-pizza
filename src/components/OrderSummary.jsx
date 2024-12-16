import { useState } from "react";
import { Link } from "react-router-dom";

export default function OrderSummary(props) {
  const { form, handleInputChange, butonAction } = props;

  //const [fiyat, setFiyat] = useState(form.price)
  //const productPrice = form.price;

  const secimlerTutar = form.ekMalzemeler.length * 5;
  let sonFiyat = form.adet * (secimlerTutar + form.price);

  //console.log(typeof(productPrice), typeof(form.adet), typeof(secimlerTutar))

 

  return (
    <>
      <div style={{ display: "flex", gap:"10px"}}>
        <div className="order-count">
          <button className="home-bt" name="adet-eksi" value={form.adet} onClick={handleInputChange}>
            -
          </button>
          <p>  {form.adet}  </p>
          <button className="home-bt" name="adet-arti" value={form.adet} onClick={handleInputChange}>
            +
          </button>
        </div>
        <div className="order-summary-div">
          <h3>Sipariş Toplamı</h3>
          <p>Seçimler: {form.adet*secimlerTutar}₺</p>
          <p>Toplam: {sonFiyat}₺</p>
          <Link to="/siparis-onay">
        <button className="order-btn" onClick={butonAction} name="price" value={sonFiyat}>
          Sipariş Ver
        </button>
        </Link>
        
        
      </div>
      </div>
    </>
  );
}
