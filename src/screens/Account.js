import React,{useState} from "react";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function Account() {

    const [state,setState] = useState(true)

    const handleChange = () => {
        setState(!state)
    }

    return (
        <>
        { state === true ? <SignIn handleChange={handleChange}/> : <SignUp handleChange={handleChange}/> }
        </>
    )
}
