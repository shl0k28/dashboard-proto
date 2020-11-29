import React from 'react';
import logo from '../assets/inDebit-trans.png';
//import photo from '../assets/university.jpeg'

const Login = () => {
    return(
        <React.Fragment>
            <section>
                <div className="flex w-screen h-screen">
                    <div className="bg-gray-900 w-1/2 h-full">
                        <div className="flex items-center justify-center h-full w-full">
                            <a href="https://indebit.tech/">
                                <img src={logo} alt="indebit company logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-200 w-1/2 h-full">
                        <div className="flex items-center justify-center h-full">
                            <div className="p-2">
                                <form>
                                    <div className="m-6">
                                        <div>
                                            <label className="text-xl font-mono font-light text-gray-800" htmlFor="inputEmail">Email</label>
                                        </div>    
                                        <div className="mt-1">
                                            <input className="py-1 px-2 font-normal text-xl rounded-md hover:bg-gray-300 border-b-2" type="email" name="email" id="inputEmail" placeholder="john.doe@email.com"/>
                                        </div>
                                    </div>
                                    <div className="m-6">
                                        <div>
                                            <label className="text-xl font-mono font-light text-gray-800" htmlFor="inputPass">Password</label>
                                        </div>    
                                        <div className="mt-1">
                                            <input className="py-1 px-2 font-normal text-xl rounded-md hover:bg-gray-300 border-b-2" type="password" name="password" id="inputPass" placeholder="********"/>
                                        </div>
                                    </div>
                                    <div className="flex ml-6 mt-8">
                                        <div className="w-full">
                                            <button className="border-2 p-2 text-lg w-32 font-medium text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700" type="submit">Login</button>
                                        </div>
                                        <div className="w-full">
                                            <button className="border-2 p-2 text-lg w-32 font-medium text-gray-200 bg-blue-600 rounded-md hover:bg-blue-400" type="submit">Sign Up</button>
                                        </div>
                                    </div>
                                    <div className="ml-6 mt-4">
                                        <a href="/" className="ml-20 text-gray-800 hover:text-gray-600 hover:underline">Forgot Password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;