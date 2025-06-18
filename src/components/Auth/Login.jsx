import React, { useState } from "react";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center" >
            <div className="border-2 border-emerald-600 p-20 rounded-2xl">
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} action="" className="flex flex-col items-center justify-center">
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required className="bg-transparent outline-none text-white border-2 border-emerald-600 rounded-full py-3 px-4 " type="email" placeholder="Enter your email" />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} required className=" mt-5 bg-transparent outline-none text-white border-2 border-emerald-600 rounded-full py-3 px-4 " type="password" placeholder="Enter your Password" />
                    <button className="mt-6 py-3 px-4 rounded-full bg bg-emerald-600">Login</button>
                </form>
            </div>

        </div>
    )

}
export default Login