import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div className=" grow flex items-center justify-center">
            <div className="mt-9">
                <h1 className="text-3xl text-center mb-4 font-bold">Login</h1>
                <form className=" max-w-md mx-auto ">
                    <input type="email" placeholder="your@email.com" />
                    <input type="password" placeholder="password" />
                    <button className="primary">Log-In</button>
                    <div className="flex justify-center gap-1 text-xs py-2 text-gray-500"> Dont have account yet ? <Link to={'/signup'} className="underline text-black">Register Now</Link></div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage