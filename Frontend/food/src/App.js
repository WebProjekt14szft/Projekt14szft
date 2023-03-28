import "./App.css";
import Head from "./page/Head";
import Body from "./page/Body";
import { BrowserRouter } from "react-router-dom";
import Mainroots from "./roots/Mainroots";
import Body from "./page/Body";
import { BrowserRouter } from "react-router-dom";
import Mainroots from "./roots/Mainroots";

function App() {
  return (
    <div className="App">
      <Head />
      <Body />
      <BrowserRouter>
        <Mainroots />
        <Head />
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
