import React from "react";
import "./../styles/Home.scss";
import "../component/style.scss";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (

      <div className="wrapper">
   	<nav id="sidebar">
   		<div className="sidebar-header">
   			<h3>Community Planner</h3>
   		</div>


   		<ul className="list-unstyled components">
   			<p></p>
   			<li className="active">
   				<Link to="/angendaHoy">AGENDA</Link>
   				<ul className="collapse list-unstyled" id="homeSubmenu">
   					<li>
   						<Link to="/agendaHoy">Agenda de Hoy</Link>
   					</li>
   					<li>
   						<Link to="/agendaHoy">Invitar a un usuario a un evento</Link>
   					</li>
   					<li>
   						<Link to="/agendaHoy">Reporte</Link>
   					</li>
   				</ul>
   			</li>

   			<li>
   				<a ></a>
   			</li>
   			<li>
   				<Link to="/agendaHoy">MANTENEDORES</Link>
   				<ul className="collapse list-unstyled" id="pageSubmenu">
   					<li>
   						<Link to="/agendaHoy">usuarios</Link>
   					</li>
   					<li>
   						<Link to="/agendaHoy">Grupos</Link>
   					</li>
   					<li>
   						<Link to="/agendaHoy">Servicios</Link>
   					</li>
   				</ul>
   			</li>
   			<li>
   				<Link to="/agendaHoy">REPORTES</Link>
   			</li>
   			<li>
   				<Link to="/agendaHoy">SOPORTE</Link>
   			</li>
   		</ul>

   		<ul className="list-unstyled CTAs">
   			<li>
   				<Link to="/agendaHoy">DESCARGA DE REPORTES</Link>
   			</li>
   			<li>
   				<Link to="/agendaHoy">ALERTAS</Link>
   			</li>
   		</ul>
   	</nav>





   </div>


	);
  }
}
