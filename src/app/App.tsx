import React, { FC } from "react";
import styles from "./App.module.scss";
import Container from "@/components/ui/Container/Container";
import RequestsContainer from "@/containers/RequestsContainer/RequestsContainer";
import NotificationsContainer from "@/containers/NotificationsContainer/NotificationsContainer";
import CalendarContainer from "@/containers/CalendarContainer/CalendarContainer";

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
          <RequestsContainer />
        </Container>
      </div>
      <div className={styles.container__item}>
          <Container title={"Календарь"}>
              <CalendarContainer />
          </Container>
      </div>
      <div className={styles.container__item}>
        <Container title={"Уведомления"}>
          <NotificationsContainer />
        </Container>
      </div>
    </div>
  );
};

export default App;
