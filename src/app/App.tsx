import React, { FC } from "react";
import styles from "./App.module.scss";
import Container from "@/components/ui/Container/Container";

const App: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <Container
          title={"Заявки"}
          notification={
            <div>
              <span>Новых заявок</span>
              <span>14</span>
            </div>
          }
        >
          <h1>хай</h1>
        </Container>
      </div>
      <div className={styles.container__item}>calendar</div>
      <div className={styles.container__item}>notification</div>
    </div>
  );
};

export default App;
