import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment/moment";

const Calendar = () => {
  const DayHeaderContent = (args) => {
    return (
      <div>
        <span>{moment(args.date).format("D")}</span>
        <span style={{ display: "block", marginTop: "5px", fontWeight: "300" }}>
          {moment(args.date).format("ddd")}
        </span>
      </div>
    );
  };
  const DayCellDidMount = (cell) => {
    if (cell.isPast) cell.el.style.backgroundColor = "#F8F9FD";
    cell.el.style.border = 0;
    if (!cell.isPast) {
      cell.el.style.border = "1px solid #d8d8d8";
      cell.el.style.backgroundColor = "#FFFFFF";
    }
  };
  const HeaderToolbar = {
    start: "today,prev,next",
    center: "title",
    end: "timeGridWeek,timeGridDay",
  };
  const events = [
    {
      title: "Event1",
      start: "2023-04-07",
    },
    {
      title: 'Event2',
      start: '2023-04-10T10:00:00',
      end:'2023-04-10T15:00:00',
    },
  ];
   const SlotLabelFormat=[
    {
      hour: "numeric",
      meridiem: "lowercase",
    },
  ]
  return (
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridWeek"}
        headerToolbar={HeaderToolbar}
        height={"90vh"}
        eventSources={{events}}
        dayCellDidMount={(cell) => DayCellDidMount(cell)}
        slotLabelFormat={SlotLabelFormat}
        dayHeaderContent={(args) => DayHeaderContent(args)}
        firstDay={1}
        allDaySlot={false}
      />
  );
};

export default Calendar;
