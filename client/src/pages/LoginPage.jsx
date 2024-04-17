import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom"

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState("");

    async function handleClick(e) {
        e.preventDefault();
        try {
            await axios.post('./login', { email, password })
            alert('login Sucessfull')
            setRedirect(true)
        } catch (e) {
            alert("Login failed")
        }
    }
    if (redirect) {
        return <Navigate to="/" />
    }
    return (
        <div className=" grow flex items-center justify-center" onSubmit={handleClick}>
            <div className="mt-9">
                <h1 className="text-3xl text-center mb-4 font-bold">Login</h1>
                <form className=" max-w-md mx-auto " >
                    <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="primary" type='submit' >Log-In</button>
                    <div className="flex justify-center gap-1 text-xs py-2 text-gray-500"> Dont have account yet ? <Link to={'/signup'} className="underline text-black">Register Now</Link></div>
                </form>
            </div>
        </div>
    )
}

