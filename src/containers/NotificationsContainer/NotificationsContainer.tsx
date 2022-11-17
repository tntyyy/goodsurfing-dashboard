import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import styles from "@/containers/NotificationsContainer/NotificationsContainer.module.scss";
import SpinnerLoading from "@/components/ui/SpinnerLoading/SpinnerLoading";
import { fetchNotifications } from "@/store/reducers/notifications/actionCreators";
import { NotificationTypes } from "@/types/notifications";
import NewsNotification from "@/components/Notifications/NewsNotification/NewsNotification";
import ReviewNotification from "@/components/Notifications/ReviewNotification/ReviewNotification";

const NotificationsContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { notifications, isLoading } = useAppSelector(
    (state) => state.notification
  );

  useEffect(() => {
    dispatch(fetchNotifications());
  }, []);

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <SpinnerLoading />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.notifications}>
        {notifications &&
          notifications.map((item) => {
            if (item.type === NotificationTypes.NEWS) {
              return (
                <div className={styles.notifications__item}>
                  <NewsNotification
                    id={item.id}
                    type={item.type}
                    content={item.content}
                    key={item.id}
                  />
                </div>
              );
            }
            if (item.type === NotificationTypes.REVIEW) {
              return (
                <div className={styles.notifications__item}>
                  <ReviewNotification
                    id={item.id}
                    type={item.type}
                    content={item.content}
                    key={item.id}
                  />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default NotificationsContainer;
