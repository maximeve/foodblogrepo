import React,{useState} from "react";
import Logout from '../components/Logout';
import SignUp from '../components/SignUp';
import { useAuth } from '../firebase';


export default function Account() {
    const [state,setState] = useState(false)
    const currentUser = useAuth();

    const handleChange = () => {
        setState(!state)
    }

    const getCredentials = (props) => {
    console.log(props)
    }

    return (
        <>
        { currentUser !== null ? <Logout handleChange={handleChange}/> : <SignUp handleChange={handleChange}/> }
        </>
    )
}
