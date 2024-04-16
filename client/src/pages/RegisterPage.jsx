import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const RegisterPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function registerUser(e) {
        e.preventDefault();
        // console.log(name, email, password)
        await axios.post('/register', {
            name, email, password
        });
        alert('Registration succesful.Now you can login')
    }


    return (
        <div className=" grow flex items-center justify-center" >
            <div className="mt-9">
                <h1 className="text-3xl text-center mb-4 font-bold">Signup</h1>
                <form className=" max-w-md mx-auto " onSubmit={registerUser}>
                    <input type="text" placeholder="Prashant Sachan" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="primary" type="submit">Log-In</button>
                    <div className="flex justify-center gap-1 text-xs py-2 text-gray-500"> already a member ? <Link to={'/login'} className="underline text-black">Register Now</Link></div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage