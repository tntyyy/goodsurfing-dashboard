import React, { FC } from "react";
import styles from "./EventsContainer.module.scss";
import { IEvent } from "@/types/events";
import Event from "@/components/Event/Event";

interface EventsContainerProps {
  events: IEvent[];
}

const EventsContainer: FC<EventsContainerProps> = ({ events }) => {
  return (
    <div className={styles.container}>
      {events.map((item) => (
        <Event
          id={item.id}
          name={item.name}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default EventsContainer;
