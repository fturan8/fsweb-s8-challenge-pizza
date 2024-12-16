import { Switch, Route } from "react-router-dom";

import SiparisFormu from "./pages/SiparisFormu.jsx";
import Banner from "./components/Banner.jsx";
import { product } from "./dataList.js";
import Anasayfa from "./pages/Anasayfa.jsx";
import SiparisOnayi from "./pages/SiparisOnayi.jsx";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Anasayfa />
        </Route>
        <Route exact path="/siparis-formu">
          <SiparisFormu />
        </Route>
        <Route exact path="/siparis-onay">
          <SiparisOnayi />
        </Route>
      </Switch>
      
      {/*<Anasayfa />
      <SiparisFormu />
      <SiparisOnayi />*/}

      {/* <div>
      <div >
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
      </div>*/}
    </>
  );
}

export default App;
