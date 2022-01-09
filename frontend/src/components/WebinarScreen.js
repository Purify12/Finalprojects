import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Screen.css";

function WebinarScreen({ children, title }) {
  return (
    <div className="mainback" style={{marginBlockEnd:10}}>
      <Container>
        <Row>
          <Col xs={12} md={2} style={{backgroundColor:"blueviolet", padding: 10}}>
          <Button style={{ margin: 1 }} size="lg" href="/mynotes">
              Article
            </Button>
            <Button style={{ margin: 1, }} size="lg">
              User
            </Button>
            <Button style={{ margin: 1 }} size="lg" href="/webinar">
              Webinar
            </Button>
            <Button style={{ margin: 1 }} size="lg">
              Comment
            </Button>
          </Col>
          <Col xs={12} md={10}>
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

export default WebinarScreen;
