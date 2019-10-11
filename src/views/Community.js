import React from "react";
//import { Link } from "react-router-dom";
import "./../styles/style.scss";
import Nav from "../component/nav.jsx";   //esta linea se agrego, faltaba indicar la ubicacion del archivo nomas
import { Container, Row, Col } from "reactstrap"; //esta linea se agrego

 export class Community extends React.Component {
        render (){
        return (
             <Container fluid={true}>

        <Row>
          <Col xs="3">
          <Nav />
          </Col>
          <Col xs="9">

          </Col>
        </Row>

      </Container>

        );
    }
    }