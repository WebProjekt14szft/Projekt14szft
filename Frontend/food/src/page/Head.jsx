import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Design from "../css/HeadDesign.css";
import Image from "../img/cooking.png";

const Head = () => {
  return (
    <section>
      <div className="flex-container">
        <div className="left-side">
          <img className="headimage" src={Image} alt="" />

        <div className="title">
          <h1>Főzésre fel!</h1>
          <p>
            Hozz létre saját bevásárló listát egy pár kattintásal! Tervezd meg
            az egész heti menüt velünk!
          </p>
          <Button className="button">Kezdés</Button>
        </div>

        <div className="right-side">
          <div className="circle"></div>
          <div className="circle_2"></div>

          <div className="circle_3"></div>
        </div>
      </div>
    </section>
  );
};

export default Head;
