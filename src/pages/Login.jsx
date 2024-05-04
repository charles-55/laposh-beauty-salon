import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Google } from 'react-bootstrap-icons';
import { Button, Col } from 'react-bootstrap';

import logo from '../assets/img/logo.png';

import '../assets/css/auth.css';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState({});

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location = "/";
        } catch (err) {
            setStatus({ success: false, message: "Invalid email or password. Try again..." });
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            window.location = "/";
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='auth-page'>
            <p style={{textAlign: 'center'}}><img id='logo' className='rounded-circle' src={logo} alt='Logo' /></p>
            <p>Email address:</p>
            <p>
                <input 
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </p>
            <p>Password:</p>
            <p>
                <input 
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </p>
            <p style={{textAlign: 'center'}}><Button id='auth-btn' onClick={signIn}>Sign In</Button></p>
            {
                status.message &&
                <p className={(status.success === false) ? "danger" : "success"}>{status.message}</p>
            }
            <p style={{textAlign: 'right'}}><a>Forgot password?</a></p>

            <div className='hr-or-hr'>
                <span>Or</span>
            </div>

            <div>
                <Col className='text-sm-center'>
                    <div className='other-signin-options'>
                        <a onClick={signInWithGoogle}><Google className='navbar-icon' color='white' /></a>
                    </div>
                </Col>
            </div>
        </div>
    );
};
