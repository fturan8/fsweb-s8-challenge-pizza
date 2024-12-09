import { useState } from "react";

export default function OrderSummer(props) {
    const {form} = props

  const [count, setCount] = useState(1);
  const [secimler, setSecimler] = useState(0);
  const [result, setResult] = useState(form.price);

  const secimlerTutar = form.ekMalzemeler.length*5;


  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <button onClick={() => {
                setCount((count) => count - 1)
                
            }}>-</button>
          <p>{count}</p>
          <button onClick={() => 
            {
                
                setCount((count) => count + 1)
                
            }}>+</button>
        </div>
        <div>
        <h3>Sipariş Toplamı</h3>
        <p>Seçimler: {secimlerTutar}₺</p>
        <p>Toplam: {result + secimlerTutar}₺</p>
        </div>
      </div>
    </>
  );
}
