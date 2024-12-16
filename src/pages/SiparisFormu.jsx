import FormPage from "../components/FormPage.jsx";
import Banner from "../components/Banner.jsx";
import { product } from "../dataList.js";

export default function SiparisFormu() {
  //console.log(product);
  return (
    <>
      <FormPage product={product} />
    </>
  );
}
