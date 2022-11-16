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
      {children}
    </div>
  );
};

export default Container;
