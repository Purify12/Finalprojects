import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import "./Screen.css";

function Menu({ children, title }) {
  return (
    <div className="mainback" style={{marginBlockEnd:10}}>
      <Container>
        <Row>
          <Col xs={6} md={2}>
          </Col>
          <Col xs={12} md={8}>
              <div className="page">
                {title && (
                  <>
                    <h1 className="heading">{title}</h1>
                    <hr />
                  </>
                )}
                {children}
              </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Menu;
