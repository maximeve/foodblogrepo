import React,{useState} from "react";
import { useSelector } from "react-redux";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import {login, logout} from '../store/accountStore/accountSlice'

export default function Account() {
    const [state,setState] = useState(false)
    const isLoggedIn = useSelector(state => state.account.isLoggedIn)
    console.log(isLoggedIn)

    const handleChange = () => {
        setState(!state)
    }

    const getCredentials = (props) => {
    console.log(props)
    }

    return (
        <>
        { state === true ? <SignIn handleChange={handleChange}/> : <SignUp handleChange={handleChange}/> }
        </>
    )
}
