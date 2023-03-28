import "./App.css";
import Head from "./page/Head";
import { BrowserRouter } from "react-router-dom";
import Mainroots from "./roots/Mainroots";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mainroots />
        <Head />
      </BrowserRouter>
    </div>
  );
}

export default App;
