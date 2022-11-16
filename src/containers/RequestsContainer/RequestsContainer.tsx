import React, { FC } from "react";
import styles from "./RequestsContainer.module.scss";
import { IRequest } from "@/types/requests";
import Button from "@/components/ui/Button/Button";
import RequestItem from "@/components/RequestItem/RequestItem";

interface RequestsContainerProps {
  requests: IRequest[];
}

const RequestsContainer: FC<RequestsContainerProps> = ({ requests }) => {
  return (
    <div className={styles.container}>
      <div className={styles.requests}>
        {requests &&
          requests.map((item) => (
            <RequestItem
              id={item.id}
              name={item.name}
              location={item.location}
              description={item.description}
              image={item.image}
              type={item.type}
              key={item.id}
            />
          ))}
      </div>
      <Button
        text={"Посмотреть все"}
        isDisabled={false}
        handleClick={() => alert("req")}
      />
    </div>
  );
};

export default RequestsContainer;
