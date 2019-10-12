import React from "react";

import Nav from "../component/nav.jsx";    //esta linea se agrego, faltaba indicar la ubicacion del archivo nomas
import EventCalendar from "../component/EventCalendar.js";   //esta linea se agrego, faltaba indicar la ubicacion del archivo nomas

//para bootstrap y diseño de filas y columnas extrañamente tuve que instalar libreria reacstrap: npm install --save reactstrap react react-dom

import "./../styles/style.scss"; //al home.scss se agrego @import "~bootstrap/scss/bootstrap.scss";
import { Container, Row, Col } from "reactstrap"; //esta linea se agrego

//queda revisar esos warnings, segun vi explican en la pagina que ahora se edben usar de otra manera, dale cliack a lo que esta en el mismo warning despues de Learn more:


    export class agendaHoy extends React.Component {
        render (){
        return (
             <Container fluid={true}>

        <Row>
          <Col xs="3">
          <Nav />
          </Col>
          <Col xs="9">
          <EventCalendar />
          </Col>
        </Row>

      </Container>

        );
    }
    }
