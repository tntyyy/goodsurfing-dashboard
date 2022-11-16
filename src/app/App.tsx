import React, { FC } from "react";
import styles from "./App.module.scss";
import Button from "@/components/ui/Button/Button";

const App: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <Button
          text={"Посмотреть все"}
          isDisabled={false}
          handleClick={() => alert("Click")}
        />
      </div>
      <div className={styles.container__item}>calendar</div>
      <div className={styles.container__item}>notification</div>
    </div>
  );
};

export default App;
