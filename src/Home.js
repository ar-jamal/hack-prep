import React from "react"
import { useSelector } from "react-redux";
// import loginReducer from "./utils/Redux/store"

export default function Home () {
    const loginDetailFromReducer = useSelector((a) => a.loginReducer)
    console.log(loginDetailFromReducer)
    return(
        <div>
            <h2>userName</h2>
            <h2>email</h2>
            <h2>password</h2>
        </div>
    )
}