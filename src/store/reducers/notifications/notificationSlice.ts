import { INotification } from "@/types/notifications";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  notifications: INotification[];
  isLoading: boolean;
  error: string;
}

const initialState: NotificationState = {
  notifications: [],
  isLoading: false,
  error: "",
};

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notificationsFetching(state: NotificationState) {
      return {
        ...state,
        isLoading: true,
      };
    },
    notificationsFetchingSuccess(
      state: NotificationState,
      action: PayloadAction<INotification[]>
    ) {
      return {
        isLoading: true,
        error: "",
        notifications: action.payload,
      };
    },
    notificationsFetchingError(
      state: NotificationState,
      action: PayloadAction<string>
    ) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export default notificationSlice.reducer;
