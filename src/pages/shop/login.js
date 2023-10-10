import Head from "next/head"
import Link from "next/link"
import React, { useState } from "react"
import { validUserLogin } from "../../../utils/valid"
import { postData } from "../../../utils/fetchData"

const LoginShop = () => {
    const initState = {
        email: "",
        password: "",
    }
    const [userData, setUserData] = useState(initState)
    const { email, password } = userData
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const msg = validUserLogin(email, password)
        if (msg) {
            return alert(msg)
        }

        const res = await postData("shop/login", userData)
        console.log(res)
    }
    return (
        <>
            <Head>
                <title>Đăng nhập kênh người bán</title>
            </Head>
            <div className='flex flex-col items-center justify-center '>
                <div className='bg-gray-200 p-6 rounded mt-12 min-w-[400px]'>
                    <div>
                        <p className='text-lg'>Đăng Nhập Kênh Người Bán</p>
                    </div>
                    <form onSubmit={handleSubmit} action=''>
                        <div className='flex flex-col '>
                            <input
                                name='email'
                                value={email}
                                onChange={handleChange}
                                className='px-3 py-2 rounded my-2 w-full'
                                type='email'
                                placeholder='Email'
                            />
                            <input
                                name='password'
                                value={password}
                                onChange={handleChange}
                                className='px-3 py-2 rounded my-2'
                                type='password'
                                placeholder='Mật khẩu'
                            />
                            <button className='bg-[#f9502f] rounded text-white py-2 uppercase mt-6'>
                                Đăng Nhập
                            </button>
                        </div>
                    </form>
                    <div className='flex mt-3'>
                        <p>Bạn mới biết đến Shoppee? </p>
                        <Link
                            className='text-[#f9502f] ml-1'
                            href='/shop/register'
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

export default LoginShop
