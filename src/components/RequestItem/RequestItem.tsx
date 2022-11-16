import React, { FC } from "react";
import styles from "./RequestItem.module.scss";
import { IRequest } from "@/types/requests";

const RequestItem: FC<IRequest> = ({
  name,
  location,
  description,
  image,
  type,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__info}>
        <img src={image} alt={name} className={styles.info__image} />
        <div className={styles.info__text}>
          <p className={styles.text__name}>{name}</p>
          <p className={styles.text__location}>{location}</p>
        </div>
      </div>
      <p className={styles.item__description}>{description}</p>
      <div className={styles.item__type}>{type}</div>
    </div>
  );
};

export default RequestItem;
