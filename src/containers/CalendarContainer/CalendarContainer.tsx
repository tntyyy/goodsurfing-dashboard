import React, { FC, useEffect, useState } from "react";
import styles from "./CalendarContainer.module.scss";
import Calendar from "react-calendar";
import ArrowNext from "@/components/ui/CalendarArrows/ArrowNext";
import ArrowPrev from "@/components/ui/CalendarArrows/ArrowPrev";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchEvents } from "@/store/reducers/events/actionCreators";
import SpinnerLoading from "@/components/ui/SpinnerLoading/SpinnerLoading";
import EventsContainer from "@/containers/EventsContainer/EventsContainer";
import Button from "@/components/ui/Button/Button";

const CalendarContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { notifications, isLoading } = useAppSelector((state) => state.event);

  const [filteredEvents, setFilteredEvents] = useState(notifications);
  const [calendarValue, setCalendarValue] = useState(new Date());

  const disablePastDates = (activeStartDate: Date, date: Date) => {
    return new Date().getTime() - date.getTime() > 86400001;
  };

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  useEffect(() => {
    setFilteredEvents(
      notifications.filter((item) => {
        return item.date === calendarValue.toString();
      })
    );
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
      <div className={styles.events}>
        {isLoading && <SpinnerLoading />}
        {filteredEvents.length ? (
          <EventsContainer events={filteredEvents} />
        ) : (
          <p className={styles.events__empty}>
            На этот день ничего не запланировано
          </p>
        )}
      </div>
      <Button
        text={"Посмотреть весь"}
        isDisabled={false}
        handleClick={() => alert("req")}
      />
    </div>
  );
};

export default CalendarContainer;
