import SiparisFormu from "./SiparisFormu.jsx";
import { Link } from "react-router-dom";

function Anasayfa() {

  function handleClassName(event){
    document.body.classList.remove('home-bg');
    document.body.classList.add('order-form-page');
  }
    
  return (
    <>
    <div>
    <div className="home-logo">
        <img src="../../images/iteration-1-images/logo.svg"  />
      </div>
    <div className="home-slogan">
      <h1 className="home-h1">KOD ACIKTIRIR</h1>
      <h1 className="home-h1">PİZZA, DOYURUR</h1>
      {/*
      
      <OrderForm />*/}
      </div>
      <Link to="/siparis-formu">
      <button className="home-bt" onClick={handleClassName}>
        ACIKTIM
      </button>
      </Link>
      
    </div>
    </>
    
  );
}

export default Anasayfa;
