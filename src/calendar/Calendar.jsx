import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import moment from "moment/moment";


const Calendar = () => {
  return (
    <div style={{ padding: "50px" }}>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
         
        ]}
        initialView={"timeGridWeek"}
        headerToolbar={{
          start: "today,prev,next",
          center: "title",
          end: "timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        eventSources={{
          events: [
            {
              title: "Event1",
              start: "2023-04-07",
            },
            {
              // title: 'Event2',
              // start: '2023-04-05T10:00:00',
              // end:'2023-04-05T15:00:00',
            },
          ],
        }}
        dayCellDidMount={(cell) => {
          // console.log('td',cell);
          if (cell.isPast) cell.el.style.backgroundColor = "#F8F9FD";
          cell.el.style.border = 0
          if (!cell.isPast) cell.el.style.border = "1px solid grey";
        }}
        slotLabelFormat={[
          {
            hour: "numeric",
            meridiem: "lowercase",
        
          },{day:'numeric'}
        ]}
        views={{
          
        }}
        
        dayHeaderContent={ (args) => {
          console.log('args',args);
          return moment(args.date).format("D ddd")
      }}
       
      />
    </div>
  );
};

export default Calendar;
