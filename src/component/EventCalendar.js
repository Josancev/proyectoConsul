import React from 'react';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./../styles/style.scss";

export default class EventCalendar extends React.Component {



render() {
	return (

        <div className="container-fluid">
        <div className="wrapper">
	<FullCalendar

	defaultView="dayGridMonth" plugins= {[dayGridPlugin]}
	/>
    </div>
	</div>
    )
       }
}