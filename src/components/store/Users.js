import { createSlice } from "@reduxjs/toolkit";

export const userList = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setInitial: (state, action) => {
      state.users = action.payload;
    },
    increment: (state, action) => {
      let userIndex = state.users.findIndex(
        (data) => data.login.uuid === action.payload
      );
      let tempUsers = state.users;
      tempUsers[userIndex].vote += 1;
      tempUsers = tempUsers.sort((a, b) => b.vote - a.vote);
      state.users = tempUsers;
    },
  },
});

export const { setInitial, increment } = userList.actions;

export default userList.reducer;
