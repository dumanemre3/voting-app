import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
export const logs = createSlice({
  name: "logs",
  initialState: {
    logs: [],
  },
  reducers: {
    addLog: (state, action) => {
      let tempLogs = state.logs || [];
      action.payload.time = moment().toString();
      tempLogs.push(action.payload);
      state.logs = tempLogs;
    },
  },
});

export const { addLog } = logs.actions;

export default logs.reducer;
