import React, { FC } from "react";
import styles from "./ReviewNotification.module.scss";
import { INotification } from "@/types/notifications";
import { textDependingOnGender } from "@/utils/textDependingOnGender";

const ReviewNotification: FC<INotification> = ({ content }) => {
  return (
    <div className={styles.item}>
      <p className={styles.item__name}>
        <span>{"name" in content ? content.name : "Упс..."} </span>
        {textDependingOnGender("sex" in content ? content.sex : "male")}
      </p>
      <span className={styles.item__date}>{content.date}</span>
    </div>
  );
};

export default ReviewNotification;
