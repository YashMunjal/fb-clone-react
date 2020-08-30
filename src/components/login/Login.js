import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth,provider} from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

function Login() {
    const [state,dispatch] =useStateValue();

    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then((e)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:e.user
            })
            console.log(e.user);
        }).catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/384px-Facebook_icon.svg.png" alt="logo" />
                <img src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
