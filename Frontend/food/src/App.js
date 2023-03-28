import "./App.css";
import Head from "./page/Head";
import Body from "./page/Body";
import { BrowserRouter } from "react-router-dom";
import Mainroots from "./roots/Mainroots";
import Navbar from "./roots/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mainroots />
        <Head />
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
