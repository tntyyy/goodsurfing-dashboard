import React, { FC, useEffect, useState } from "react";
import styles from "./CalendarContainer.module.scss";
import Calendar from "react-calendar";
import ArrowNext from "@/components/ui/CalendarArrows/ArrowNext";
import ArrowPrev from "@/components/ui/CalendarArrows/ArrowPrev";

const CalendarContainer: FC = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());

  const disablePastDates = (activeStartDate: Date, date: Date) => {
    return new Date().getTime() - date.getTime() > 86400001;
  };

  useEffect(() => {
    console.log(calendarValue);
  }, [calendarValue]);

  return (
    <div className={styles.container}>
      <Calendar
        locale={"ru"}
        value={calendarValue}
        onChange={setCalendarValue}
        tileClassName={styles.tile}
        showNeighboringMonth={false}
        tileDisabled={({ activeStartDate, date }) =>
          disablePastDates(activeStartDate, date)
        }
        nextLabel={<ArrowNext />}
        prevLabel={<ArrowPrev />}
      />
    </div>
  );
};

export default CalendarContainer;
