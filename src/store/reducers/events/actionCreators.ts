import { AppDispatch } from "@/store/store";
import { eventSlice } from "@/store/reducers/events/eventSlice";
import axios from "axios";
import { ApiEndpoints, baseUrl } from "@/constants/api";
import { IEvent } from "@/types/events";

export const fetchEvents = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(eventSlice.actions.eventsFetching());
    const response = await axios.get<IEvent[]>(
      `${baseUrl}${ApiEndpoints.EVENTS}`
    );
    dispatch(eventSlice.actions.eventsFetchingSuccess(response.data));
  } catch (e) {
    dispatch(eventSlice.actions.eventsFetchingError(e.message));
  }
};
