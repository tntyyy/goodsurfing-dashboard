import React, { FC, useEffect } from "react";
import styles from "./RequestsContainer.module.scss";
import Button from "@/components/ui/Button/Button";
import RequestItem from "@/components/RequestItem/RequestItem";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchRequests } from "@/store/reducers/requests/actionCreators";

const RequestsContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { requests } = useAppSelector((state) => state.request);

  useEffect(() => {
    dispatch(fetchRequests());
  }, []);

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
