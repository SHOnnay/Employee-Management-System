import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHnadler = (e) => {
        e.preventDefault();
        console.log('Email, password is', email, password);

        setEmail('');
        setPassword('');

    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-none shadow-2xl shadow-gray-950 rounded-2xl bg-[#0B2B40] border-black p-20'>
                <form
                    onSubmit=
                    {
                        (e) => {
                            submitHnadler(e);
                        }
                    }
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange=
                        {
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }
                        required
                        className='outline-none border-none bg-gray-700 shadow-sm shadow-black text-xl py-3 px-5 font-medium text-white rounded-full placeholder:text-gray-400 focus:bg-gray-600' type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={
                            (e) => {
                                setPassword(e.target.value);
                            }
                        }
                        required className='outline-none border-none bg-gray-700 shadow-sm shadow-black text-xl py-3 px-5 font-medium text-white rounded-full placeholder:text-gray-400 mt-4 focus:bg-gray-600' type="password" placeholder='Enter your password' />
                    <button className='mt-5 outline-none border-none hover:bg-red-600 font-semibold bg-red-500 text-gray-900 text-xl py-2 px-8 w-full rounded-full placeholder:text-white'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;