import React,{useState} from "react";
import { useSelector } from "react-redux";
import Logout from '../components/Logout';
import SignUp from '../components/SignUp';
import { useAuth } from '../firebase';


export default function Account() {
    const [state,setState] = useState(false)
    const currentUser = useAuth();
    const isLoggedIn = useSelector(state => state.account.isLoggedIn)
    console.log(isLoggedIn)
    console.log(currentUser)

    const handleChange = () => {
        setState(!state)
    }

    const getCredentials = (props) => {
    console.log(props)
    }

    return (
        <>
        { currentUser != null ? <Logout handleChange={handleChange}/> : <SignUp handleChange={handleChange}/> }
        </>
    )
}
