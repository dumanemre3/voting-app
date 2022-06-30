import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Users";
import logsReducer from "./Logs";

export const store = configureStore({
  reducer: {
    user: userReducer,
    logs: logsReducer,
  },
});
