import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
      console.log(action.payload);
    },
    deleteUsers(state, action) {
      // state.splice(action.payload, state.length);
      return [];
      console.log(action.payload);
    },
  },
});

console.log(userSlice);

export default userSlice.reducer;

export const { addUser, removeUser, deleteUsers } = userSlice.actions;
