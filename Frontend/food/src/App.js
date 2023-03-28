import "./App.css";
import Head from "./page/Head";
<<<<<<< HEAD
import Body from "./page/Body";
=======
import { BrowserRouter } from "react-router-dom";
import Mainroots from "./roots/Mainroots";
>>>>>>> e9876ca33603726948d64d42fb7a142fac808528

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Head />
      <Body />
=======
      <BrowserRouter>
        <Mainroots />
        <Head />
      </BrowserRouter>
>>>>>>> e9876ca33603726948d64d42fb7a142fac808528
    </div>
  );
}

export default App;
