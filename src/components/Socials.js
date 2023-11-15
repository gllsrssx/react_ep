import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Socials() {
    return (
        <Container className="socialsContainer">
            <Row className="socialsRow">
                <Col xs={12} className="socialsCol">
                    <p className="socialsTitle">Connect with us:</p>
                    <p className="socialsInfo">
                        <span className="socialsEmail">Email: LunaMovies@outlook.com</span>
                        <br />
                        <span className="socialsPhone">Phone: +32 468 13 35 12</span>
                        <br />
                        <span className="socialsInstagram">
              Instagram: @LunaMovies
            </span>
                        <br />
                        <span className="socialsFacebook">
              Facebook: LunaMovies
            </span>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Socials;