import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        loginReducer: loginSlice,
    }
})
export default store;