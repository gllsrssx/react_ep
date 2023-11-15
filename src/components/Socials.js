import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Socials() {
    return (
        <Container className="socialsContainer">
            <Row className="socialsRow justify-content-md-center">
                <Col xs={12} md={8} className="socialsCol">
                    <h2 className="text-center">Connect with us:</h2>
                    <p className="socialsInfo">
                        <span className="d-block">Email: LunaMovies@outlook.com</span>
                        <br />
                        <span className="d-block">Phone: +32 468 13 35 12</span>
                        <br />
                        <span className="d-block">Instagram: @LunaMovies</span>
                        <br />
                        <span className="d-block">Facebook: LunaMovies</span>
                        <br />
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Socials;