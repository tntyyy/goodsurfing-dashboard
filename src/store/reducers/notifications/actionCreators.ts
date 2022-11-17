import { AppDispatch } from "@/store/store";
import { notificationSlice } from "@/store/reducers/notifications/notificationSlice";
import axios from "axios";
import { INotification } from "@/types/notifications";
import { ApiEndpoints, baseUrl } from "@/constants/api";

export const fetchNotifications = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(notificationSlice.actions.notificationsFetching());
    const response = await axios.get<INotification[]>(
      `${baseUrl}${ApiEndpoints.NOTIFICATIONS}`
    );
    dispatch(
      notificationSlice.actions.notificationsFetchingSuccess(response.data)
    );
  } catch (e) {
    dispatch(notificationSlice.actions.notificationsFetchingError(e.message));
  }
};
