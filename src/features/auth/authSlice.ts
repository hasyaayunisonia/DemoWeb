import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  username: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ token: string; username: string }>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      //   localStorage.setItem("token", action.payload.token);
      //   localStorage.setItem("username", action.payload.username);
    },
    clearAuth(state) {
      state.token = null;
      state.username = null;
      //   localStorage.removeItem("token");
      //   localStorage.removeItem("username");
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// interface User {
//   username: string;
//   token: string;
// }

// interface AuthState {
//   user: User | null;
// }

// const initialState: AuthState = {
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login(state, action: PayloadAction<User>) {
//       state.user = action.payload;
//       localStorage.setItem("token", action.payload.token);
//     },
//     logout(state) {
//       state.user = null;
//       localStorage.removeItem("token");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
