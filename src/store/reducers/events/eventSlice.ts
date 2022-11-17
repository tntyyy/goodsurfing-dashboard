import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "@/types/events";

interface EventState {
  notifications: IEvent[];
  isLoading: boolean;
  error: string;
}

const initialState: EventState = {
  notifications: [],
  isLoading: false,
  error: "",
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventsFetching(state: EventState) {
      return {
        ...state,
        isLoading: true,
      };
    },
    eventsFetchingSuccess(state: EventState, action: PayloadAction<IEvent[]>) {
      return {
        isLoading: false,
        error: "",
        notifications: action.payload,
      };
    },
    eventsFetchingError(state: EventState, action: PayloadAction<string>) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export default eventSlice.reducer;
