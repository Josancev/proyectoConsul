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

    events={[
    { title: 'Test hoy ppopoppdpopofppdfopdfodpfodpfodpfodpfodpfodpfodpfdofpdofpdo', date: '2019-11-10', allDay: true },
    { title: 'test 2 kjhkfjkldjdlkjkldsfjslkfjsklfjsdklfjdsklfjdsfkldjfkldsjfkldsfjdsklfjdsklfjs', date: '2019-10-11', allDate: true }
  ]
  }






	/>
    </div>
	</div>
    )
       }
}