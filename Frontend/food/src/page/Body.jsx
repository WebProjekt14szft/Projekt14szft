import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyDesign from "../css/BodyDesign.css";
import { Container, Row, Col } from 'react-bootstrap';
import myImage from "../img/placeholderimage.png";

const Body = () => {
    return(
        <section>     
                <h1>A heti menü</h1>
                <div class="line"></div>
                <Container>
                    <Row>
                        <Col md={4} >  
                            <div className="card">
                                <h3 className="nameoftheday">Hétfő</h3>
                                <img className="cardimage" src={myImage} alt="placeholder"/>
                                <h5 className="nameofthefood">Étel neve</h5>
                                <div className="buttoncontainer">
                                    <div className="cardbutton">
                                        <button className="editbutton">Szerkesztés</button>
                                    </div>
                                    <div className="cardbutton">
                                        <button className="recipebutton">Recept</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                        <Col md={4} >  
                            <div className="card">
                            <h3 className="nameoftheday">Kedd</h3>
                            <img className="cardimage" src={myImage} alt="placeholder"/>
                                <h5 className="nameofthefood">Étel neve</h5>
                                <div className="buttoncontainer">
                                    <div className="cardbutton">
                                        <button className="editbutton">Szerkesztés</button>
                                    </div>
                                    <div className="cardbutton">
                                        <button className="recipebutton">Recept</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                        <Col md={4} >  
                            <div className="card">
                                <h3 className="nameoftheday">Szerda</h3>
                                <img className="cardimage" src={myImage} alt="placeholder"/>
                                <h5 className="nameofthefood">Étel neve</h5>
                                <div className="buttoncontainer">
                                    <div className="cardbutton">
                                        <button className="editbutton">Szerkesztés</button>
                                    </div>
                                    <div className="cardbutton">
                                        <button className="recipebutton">Recept</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col md={4} >  
                            <div className="card">
                                <h3 className="nameoftheday">Csütörtök</h3>
                                <img className="cardimage" src={myImage} alt="placeholder"/>
                                <h5 className="nameofthefood">Étel neve</h5>
                                <div className="buttoncontainer">
                                    <div className="cardbutton">
                                        <button className="editbutton">Szerkesztés</button>
                                    </div>
                                    <div className="cardbutton">
                                        <button className="recipebutton">Recept</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                        <Col md={4} >  
                            <div className="card">
                                <h3 className="nameoftheday">Péntek</h3>
                                <img className="cardimage" src={myImage} alt="placeholder"/>
                                <h5 className="nameofthefood">Étel neve</h5>
                                <div className="buttoncontainer">
                                    <div className="cardbutton">
                                        <button className="editbutton">Szerkesztés</button>
                                    </div>
                                    <div className="cardbutton">
                                        <button className="recipebutton">Recept</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                        <Col md={4} >  
                            <div className="card">
                                <h3 className="nameoftheday">Szombat</h3>
                                <img className="cardimage" src={myImage} alt="placeholder"/>
                                <h5 className="nameofthefood">Étel neve</h5>
                                <div className="buttoncontainer">
                                    <div className="cardbutton">
                                        <button className="editbutton">Szerkesztés</button>
                                    </div>
                                    <div className="cardbutton">
                                        <button className="recipebutton">Recept</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} ></Col>
                        <Col md={4} >  
                            <div className="card">
                                <h3 className="nameoftheday">Vasárnap</h3>
                                <img className="cardimage" src={myImage} alt="placeholder"/>
                                <h5 className="nameofthefood">Étel neve</h5>
                                <div className="buttoncontainer">
                                    <div className="cardbutton">
                                        <button className="editbutton">Szerkesztés</button>
                                    </div>
                                    <div className="cardbutton">
                                        <button className="recipebutton">Recept</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

        </section>
    );
}
export default Body;
