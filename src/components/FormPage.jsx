import { Form, FormGroup, Label, Input } from "reactstrap";
import { boyutlar, hamur, ekMalzemeler, orderForm } from "../dataList.js";
import { useEffect, useState } from "react";
import OrderSummer from "./OrderSummer.jsx";

export default function FormPage(props) {
  const { product } = props;

  const [formData, setFromData] = useState(orderForm);
  const [count, setCount] = useState(orderForm.adet);
  let fiyat = product.fiyat;

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFromData((prev) => {
      const ekMalzemeler = checked
        ? [...prev.ekMalzemeler, value]
        : prev.ekMalzemeler.filter((malzeme) => malzeme !== value);

      //console.log({ ...prev, ekMalzemeler })
      return { ...prev, ekMalzemeler };
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const secimlerTutar = formData.ekMalzemeler.length * 5;

    //console.log(secimlerTutar);

    if (name === "adet-arti") {
      setCount(count + 1);
      fiyat = (fiyat + secimlerTutar) * (count + 1);
      setFromData((prev) => ({ ...prev, adet: count + 1, price: fiyat }));
    } else if (name === "adet-eksi") {
      if (count > 1) {
        setCount(count - 1);
        fiyat = (fiyat + secimlerTutar) * (count - 1);
        setFromData((prev) => ({ ...prev, adet: count - 1, price: fiyat }));
      } 
    } else {
      
      setFromData((prev) => ({ ...prev, [name]: value }));
    }
    
  };

  return (
    <>
      <Form>
        <div style={{ display: "flex", gap: "100px" }}>
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
              >
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
          <div style={{ display: "flex", gap: "10px" }}>
            {ekMalzemeler.map((malzeme) => (
              <FormGroup check>
                <Input
                  name="ekMalzemeler"
                  type="checkbox"
                  value={malzeme}
                  onChange={handleCheckboxChange}
                  checked={formData.ekMalzemeler.includes(malzeme)}
                />
                <Label check>{malzeme}</Label>
              </FormGroup>
            ))}
          </div>
        </div>

        <div>
          <h3>Sipariş Notu</h3>
          <div style={{ width: "100%" }}>
            <FormGroup>
              <Input
                id="exampleText"
                name="siparisNotu"
                value={formData.siparisNotu}
                onChange={handleInputChange}
              />
            </FormGroup>
          </div>
        </div>
      </Form>
      <OrderSummer form={formData} handleInputChange={handleInputChange} />
      <div>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </>
  );
}
