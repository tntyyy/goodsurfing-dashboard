import { AppDispatch } from "@/store/store";
import axios from "axios";
import { IRequest } from "@/types/requests";
import { ApiEndpoints, baseUrl } from "@/constants/api";
import { requestSlice } from "@/store/reducers/requests/requestSlice";

export const fetchRequests = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestSlice.actions.requestsFetching());
    const response = await axios.get<IRequest[]>(
      `${baseUrl}${ApiEndpoints.REQUESTS}`
    );
    dispatch(requestSlice.actions.requestsFetchingSuccess(response.data));
  } catch (e) {
    dispatch(requestSlice.actions.requestsFetchingError(e.message));
  }
};
