import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initState = {
  users: [],
};

// Slice 생성
const usersSlice = createSlice({
  name: "usersSlice",
  initialState: initState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

// Redux 액션 내보내기
export const { addUser } = usersSlice.actions;

// Redux Reducer 내보내기
export default usersSlice.reducer;
