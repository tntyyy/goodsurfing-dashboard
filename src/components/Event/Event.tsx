import React, { FC } from "react";
import styles from "./Event.module.scss";
import { IEvent } from "@/types/events";

const Event: FC<IEvent> = ({ name, location, image, date }) => {
  return (
    <div className={styles.event}>
      <img src={image} alt={name} className={styles.event__image} />
      <div className={styles.info}>
        <p className={styles.info__name}>{name}</p>
        <p className={styles.info__location}>{location}</p>
        <p className={styles.info__date}>
          Прибывает {date.substring(7, 10)} ноября
        </p>
      </div>
    </div>
  );
};

export default Event;
