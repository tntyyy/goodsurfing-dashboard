import React, { FC } from "react";
import styles from "./NewsNotification.module.scss";
import { INotification } from "@/types/notifications";

const NewsNotification: FC<INotification> = ({ content }) => {
  return (
    <div className={styles.item}>
      <p className={styles.item__title}>
        {"title" in content ? content.title : "Упс..."}
      </p>
      <span className={styles.item__date}>{content.date}</span>
      <p className={styles.item__description}>
        {"description" in content ? content.description : "Упс..."}
      </p>
    </div>
  );
};

export default NewsNotification;
