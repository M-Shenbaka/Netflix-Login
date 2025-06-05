import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import netflixbg from '../assets/images/netflix_bg.jpg';
import netflixlogo from '../assets/images/netflix_logo.png';



const Login = ()=>
{
    const[email,setEmail]=useState('');
    const[password,setPassword] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [passwderror, setPasswderror] = useState('');
    const navigate = useNavigate();

    function handleEmail(event)
    {
        setEmail(event.target.value);
        setEmailerror('');
    }

    function handlePassword(event)
    {
        setPassword(event.target.value);
        setPasswderror('');
    }

    function check()
    {
        let valid = true;

        if(!email || email.trim() === "")
        {
            setEmailerror("Email or mobile number is required");
            valid = false;       
        }
        else{
            setEmailerror('');
        }

        if(!password || password.trim() === "")
        {
            setPasswderror("Password is required");
            valid = false;       
        }
        else{
            setPasswderror('');
        }

        if (!valid) return;

        axios .get(`http://localhost:3000/login?username=${email}&password=${password}`)
        .then((data)=>
        {
            if (data.data === true) 
            {
                 navigate("/success");
            } 
            else 
            {
                 navigate("/fail");
            }
        })
        .catch((error) => 
        {
             console.error("Netflix Login Failed:", error);
        });
        
    }










    return(
        <div className="relative h-screen w-full">
        {/* Netflix Bg Image */ }
        <img src={netflixbg} alt="netflixbg" className="absolute h-full w-full object-cover"/>
        {/* Netflix Logo */}
        <div className="absolute top-6 left-10 z-10 ">
            <img src={netflixlogo} alt="netflixlogo" className="w-40 h-auto" />
        </div>
        {/* Overlay */}
        <div className="absolute h-full w-full bg-black bg-opacity-60"></div>
         <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-black/75 w-full max-w-md p-8 rounded-md text-white">
                    <h1 className="text-3xl font-bold mb-6">Sign In</h1>
                    <input
                    type="text"
                    placeholder="Email or mobile number"
                    className="w-full p-2 rounded bg-gray-800 border"
                    value={email}
                    onChange={handleEmail}
                    />
                    {/* Email Error */}
                    {emailerror && (<p className="mt-1 text-sm text-red-500">{emailerror}</p>)}
                    <input
                    type="text"
                    placeholder="Password"
                    className="w-full p-2 rounded bg-gray-800 border mt-5"
                    value={password}
                    onChange={handlePassword}
                    />
                    {/* password Error */}
                    {passwderror && (<p className="mt-1 text-sm text-red-500">{passwderror}</p>)}
                    <button
                        className="w-full p-2 bg-red-600 hover:bg-red-700 rounded font-semibold mt-5"
                        onClick={check}
                    >
                    Sign In</button>
                    <p className="text-center mt-5">OR</p>
                    <button className="w-full p-2 mt-5 bg-gray-600 hover:bg-gray-700 rounded">
                        Use a Sign-in Code</button>
                    <p className="text-sm text-center mt-2">
                        <a href="#" className="underline">
                        Forgot Password?
                        </a>
                    </p>
                </div>
        </div>
    </div>
    )
}


 export default Login;