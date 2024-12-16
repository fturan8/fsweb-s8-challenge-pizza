import { Form, FormGroup, Label, Input } from "reactstrap";
import { boyutlar, hamur, ekMalzemeler, orderForm } from "../dataList.js";
import { useState } from "react";
import OrderSummary from "./OrderSummary.jsx";

export default function FormPage(props) {
  const { product } = props;

  const [formData, setFromData] = useState(orderForm);
  const [count, setCount] = useState(orderForm.adet);
  let fiyat = product.fiyat;
  let fiyatVeSecimler = fiyat + formData.ekMalzemeler.length * 5;

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setFromData((prev) => {
      const ekMalzemeler =
        checked && formData.ekMalzemeler.length <= 9 // önce kontrol edip sonra eklediği için 0'dan başlıyor. o yüzden 9'a eşitledim ve küçüklük olarak kontrol ettim.
          ? [...prev.ekMalzemeler, value]
          : prev.ekMalzemeler.filter((malzeme) => malzeme !== value);

      return { ...prev, ekMalzemeler };
    });
    return {};
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "adet-arti") {
      // artı butonu işlemleri
      setCount(count + 1);
      
      setFromData((prev) => ({ ...prev, adet: count + 1 }));
    } else if (name === "adet-eksi") {
      console.log(count);
      // eksi butonu işlemleri
      if (count > 1) {
        setCount(count - 1);
        
        setFromData((prev) => ({ ...prev, adet: count - 1 }));
      }
    } else {
      setFromData((prev) => ({ ...prev, [name]: value }));
    }
  };

  function butonActions(event) {
    const { name, value } = event.target;
    console.log(name,value)
    setFromData((prev) => ({ ...prev, price: value }));
    console.log(event.target)
    document.body.classList.remove("order-form-page");
    document.body.classList.add("confirm-order");
    console.log("formData-price",formData.price)
    
  }

  //<pre>{JSON.stringify(formData,null,2)}</pre>
  return (
    <>
      <div className="order-banner">
        <img src="../../images/iteration-1-images/logo.svg" />
      </div>
      <div className="order-form-div">
        <h3>{product.name}</h3>
        <div className="price-tag">
          <h2>{product.fiyat}₺</h2>
          <div className="rating-comment">
            <p>{product.rating}</p>
            <p>{`(${product.countOfComment})`}</p>
          </div>
        </div>
        <p className="order-form-div-des">{product.description}</p>
        <Form className="">
          <div className="order-radio-dorp-div">
            <div>
              <h3>Boyut Seç</h3>
              <div style={{ display: "block" }}>
                {boyutlar.map((boyut) => (
                  <FormGroup check>
                    <Input
                      name="boyut"
                      type="radio"
                      value={boyut}
                      onChange={handleInputChange}
                      checked={formData.boyut === boyut}
                    />
                    <Label check>{boyut}</Label>
                  </FormGroup>
                ))}
              </div>
            </div>
            <div>
              <h3>Hamur Seç</h3>
              <FormGroup>
                <Input
                  name="hamur"
                  type="select"
                  value={formData.hamur}
                  onChange={handleInputChange}
                  placeholder="Hamur Kalınlığı"
                  
                >
                  <option hidden value="">Hamur Kalınlığı</option>
                  {hamur.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Input>
              </FormGroup>
            </div>
          </div>

          <div>
            <h3>Ek Malzemeler</h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="order-check-list">
              {ekMalzemeler.map((malzeme) => (
                <FormGroup check>
                  <Input
                    id={malzeme}
                    name="ekMalzemeler"
                    type="checkbox"
                    value={malzeme}
                    onChange={handleCheckboxChange}
                    checked={formData.ekMalzemeler.includes(malzeme)}
                  />
                  <Label for={malzeme} check>
                    {malzeme}
                  </Label>
                </FormGroup>
              ))}
            </div>
          </div>
          <div>
            <h3>Ad-Soyad</h3>
            <div style={{ width: "100%" }}>
              <FormGroup>
                <Input
                  className="order-note"
                  name="isim"
                  value={formData.isim}
                  onChange={handleInputChange}
                  placeholder="Ad-Soyad"
                />
              </FormGroup>
            </div>
          </div>
          <div>
            <h3>Sipariş Notu</h3>
            <div style={{ width: "100%" }}>
              <FormGroup>
                <Input
                  className="order-note"
                  name="siparisNotu"
                  value={formData.siparisNotu}
                  onChange={handleInputChange}
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
              </FormGroup>
            </div>
          </div>
        </Form>
        <OrderSummary
          form={formData}
          handleInputChange={handleInputChange}
          butonAction={butonActions}
        />
      </div>
    </>
  );
}
