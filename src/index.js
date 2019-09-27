//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';


//include your index.scss file into the bundle
import "./component/style.scss";


//import your own components
import Nav from "./component/nav.jsx";
import Header from "./component/header.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";


class App extends React.Component {
	render() {
		return (
			<div className="row">
                <div className="col-4">
				<Nav
					btnOne="Pacientes"
					btnTwo="Agenda"
					btnThree="Medicos"
					btnFour="Mantenedores"
				/>
                </div>
				<div className="col-8 content">
                <Header />

				</div>


			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

//npm install bootstrap
//npm install -g jsx