import { IRequest } from "@/types/requests";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RequestState {
  requests: IRequest[];
  isLoading: boolean;
  error: string;
}

const initialState: RequestState = {
  requests: [],
  isLoading: false,
  error: "",
};

export const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    requestsFetching(state: RequestState) {
      return {
        ...state,
        isLoading: true,
      };
    },
    requestsFetchingSuccess(
      state: RequestState,
      action: PayloadAction<IRequest[]>
    ) {
      return {
        isLoading: false,
        error: "",
        requests: action.payload,
      };
    },
    requestsFetchingError(state: RequestState, action: PayloadAction<string>) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export default requestSlice.reducer;
