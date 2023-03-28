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
          <img src={Image} alt="" />
          <div className="circle_4"></div>

          <div className="circle"></div>
        </div>

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

      <div className="shapes">
        <div className="circle_5"></div>

        <div className="circle_7"></div>

        <div className="circle_8"></div>
        <div className="circle_9"></div>
        <div className="circle_10"></div>
        <div className="circle_11"></div>
        <div className="circle_12"></div>
        <div className="circle_6"></div>
      </div>
    </section>
  );
};

export default Head;
