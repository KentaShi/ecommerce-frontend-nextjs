import Head from "next/head"
import Link from "next/link"
import React, { useState } from "react"
import { validUserLogin } from "../../../utils/valid"

const Login = () => {
    const initState = {
        username: "",
        password: "",
    }
    const [userData, setUserData] = useState(initState)
    const { username, password } = userData
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const msg = validUserLogin(username, password)
        if (msg) {
            return alert(msg)
        }
    }

    console.log({ userData })
    return (
        <>
            <Head>
                <title>Đăng nhập tài khoản</title>
            </Head>

            <div className='flex flex-col items-center justify-center '>
                <div className='bg-gray-200 p-6 rounded mt-12 min-w-[400px]'>
                    <div>
                        <p className='text-lg'>Đăng Nhập</p>
                    </div>
                    <form onSubmit={handleSubmit} action=''>
                        <div className='flex flex-col '>
                            <input
                                name='username'
                                value={username}
                                className='px-3 py-2 rounded my-2 w-full'
                                type='text'
                                placeholder='Tên đăng nhập'
                                onChange={handleChange}
                            />
                            <input
                                name='password'
                                value={password}
                                className='px-3 py-2 rounded my-2'
                                type='password'
                                placeholder='Mật khẩu'
                                onChange={handleChange}
                            />
                            <button
                                type='submit'
                                className='bg-[#f9502f] rounded text-white py-2 uppercase mt-6'
                            >
                                Đăng Nhập
                            </button>
                        </div>
                    </form>
                    <div className='flex mt-3'>
                        <p>Bạn mới biết đến Shoppee? </p>
                        <Link
                            className='text-[#f9502f] ml-1'
                            href='/user/register'
                        >
                            {" "}
                            Đăng Ký
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
