import React, { FC } from "react";
import styles from "./ContainerTitle.module.scss";

interface ContainerTitleProps {
  title: string;
  notification?: React.ReactNode;
}

const ContainerTitle: FC<ContainerTitleProps> = ({ title, notification }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {notification}
    </div>
  );
};

export default ContainerTitle;
