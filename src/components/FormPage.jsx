import { Form, FormGroup, Label, Input } from "reactstrap";
import { boyutlar, hamur, ekMalzemeler, orderForm } from "../dataList.js";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FormPage(props) {
  const { product } = props;

  const [formData, setFromData] = useState(orderForm);
  const [count, setCount] = useState(orderForm.adet);
  const [errors, setErrors] = useState({});
  let fiyat = product.fiyat;
  //let fiyatVeSecimler = fiyat + formData.ekMalzemeler.length * 5;
  const secimlerTutar = formData.ekMalzemeler.length * 5;
  let sonFiyat = formData.adet * (secimlerTutar + fiyat);

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
    event.preventDefault();
    const { name, value } = event.target;
    
    

    if (name === "adet-arti") {
      // artı butonu işlemleri
      setCount(count + 1);
      setFromData((prev) => ({ ...prev, adet: count + 1 }));
    } else if (name === "adet-eksi") {
      // eksi butonu işlemleri
      if (count > 1) {
        setCount(count - 1);
        setFromData((prev) => ({ ...prev, adet: count - 1 }));
      }
    } else {
      setFromData((prev) => ({ ...prev, [name]: value }));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
 
    const validationErrors = {};
    if (!formData.isim.trim() || formData.isim.length < 4) {
      validationErrors.isim =
        "Ad soyad alanı gereklidir ve en az 4 karakter içermelidir.";
    }
    if (formData.ekMalzemeler.length < 4) {
      validationErrors.ekMalzemeler =
        "En az 4, en fazla 10 malzeme seçilebilir.";
    }
    if (formData.hamur === "Hamur Kalınlığı") {
      validationErrors.hamur = "Hamur kalınlığı seçilmelidir.";
    }
    if (formData.boyut === "") {
      validationErrors.boyut = "Boyut seçilmelidir.";
    }
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      
      setFromData((prev) => ({ ...prev, price: sonFiyat }));
      axios.post("https://reqres.in/api/pizza", formData).then((res) => {
        console.log(res.data);
      })
      document.body.classList.remove("order-form-page");
      document.body.classList.add("confirm-order");
    }
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
        
        <Form onSubmit={handleSubmit} >
          <div className="order-radio-dorp-div">
            <div>
              <h3>Boyut Seç</h3>
              <div style={{ display: "block" }}>
                {boyutlar.map((boyut) => (
                  <FormGroup check>
                    <Input
                      id={boyut}
                      name="boyut"
                      type="radio"
                      value={boyut}
                      onChange={handleInputChange}
                      checked={formData.boyut === boyut}
                    />

                    <Label for={boyut} check>
                      {boyut}
                    </Label>
                  </FormGroup>
                ))}
              </div>
              {errors.boyut && <span>{errors.boyut}</span>}
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
                  <option hidden value="">
                    Hamur Kalınlığı
                  </option>
                  {hamur.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Input>
                {errors.hamur && <span>{errors.hamur}</span>}
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
              {errors.ekMalzemeler && <span>{errors.ekMalzemeler}</span>}
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
                {errors.isim && <span>{errors.isim}</span>}
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
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="order-count">
              <button
                className="home-bt"
                name="adet-eksi"
                value={formData.adet}
                onClick={handleInputChange}
              >
                -
              </button>
              <p> {formData.adet} </p>
              <button
                className="home-bt"
                name="adet-arti"
                value={formData.adet}
                onClick={handleInputChange}
              >
                +
              </button>
            </div>
            <div className="order-summary-div">
              <h3>Sipariş Toplamı</h3>
              <p>Seçimler: {formData.adet * secimlerTutar}₺</p>
              <p>Toplam: {sonFiyat}₺</p>
              {/*<Link to="/siparis-onay"> </Link> */}
              <button type="submit" className="order-btn">
                Sipariş Ver
              </button>
              
            </div>
          </div>
        </Form>
        
        {/*<OrderSummary
          form={formData}
          handleInputChange={handleInputChange}
        />*/}
      </div>

{/*<pre>{JSON.stringify(formData, null, 2)}</pre>*/}
    </>
  );
}
