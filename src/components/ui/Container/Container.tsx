import React, { FC } from "react";
import styles from "./Container.module.scss";
import ContainerTitle from "@/components/ui/ContainerTitle/ContainerTitle";

interface ContainerProps {
  title: string;
  notification?: React.ReactNode;
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ title, notification, children }) => {
  return (
    <div className={styles.container}>
      <ContainerTitle title={title} notification={notification} />
      <div className={styles.container__content}>{children}</div>
    </div>
  );
};

export default Container;
