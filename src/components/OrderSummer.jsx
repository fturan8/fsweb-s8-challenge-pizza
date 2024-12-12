import { useEffect, useState } from "react";

export default function OrderSummer(props) {
  const { form, handleInputChange } = props;

  const [fiyat, setFiyat] = useState(form.price)
  //const productPrice = form.price;

  const secimlerTutar = form.ekMalzemeler.length * 5;
  
  
  //let fiyat = form.adet * (productPrice + secimlerTutar);

  //console.log(typeof(productPrice), typeof(form.adet), typeof(secimlerTutar))

  return (
    <>
      <div style={{ display: "flex", gap: "100px" }}>
        <div style={{ display: "flex", gap: "10x" }}>
          <button name="adet-eksi" value={form.adet} onClick={handleInputChange}>
            -
          </button>
          <p>{form.adet}</p>
          <button name="adet-arti" value={form.adet} onClick={handleInputChange}>
            +
          </button>
        </div>
        <div>
          <h3>Sipariş Toplamı</h3>
          <p>Seçimler: {secimlerTutar}₺</p>
          <p>Toplam: {form.price+secimlerTutar}₺</p>
        </div>
        <button >
          Sipariş Ver
        </button>
      </div>
    </>
  );
}
