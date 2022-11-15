import {createSlice} from "@reduxjs/toolkit"


const loginSlice = createSlice({
    name: "loginReducer",
    initialState: {
        email: "ar.jamalkarim@gmail.com",
        password: "123456",
        userName: "jamal karim"
    },
    reducers: {
        add (state) {},
        edit (state, action) {},
        delete: (state, action) => {}
    }
})
export const {edit} =  loginSlice.actions;

export default loginSlice.reducer;