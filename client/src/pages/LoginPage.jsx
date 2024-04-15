
const LoginPage = () => {
    return (
        <div className="bg-slate-700">
            <div className="mt-4 my-auto ">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className=" max-w-md mx-auto ">
                    <input type="email" placeholder="your@email.com" />
                    <input type="password" placeholder="password" />
                    <button className="primary">Log-In</button>
                </form>
            </div>
        </div>

    )
}

export default LoginPage