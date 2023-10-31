import Head from "next/head"
import Link from "next/link"
import React, { useState } from "react"
import { validShopSignUp } from "../../utils/valid"
import { postData } from "../../utils/fetchData"

const SignUpShop = () => {
    const initialData = {
        name: "",
        email: "",
        phone: "",
        password: "",
    }
    const [shopData, setShopData] = useState(initialData)
    const { name, email, phone, password } = shopData
    const handleChange = (e) => {
        const { name, value } = e.target
        setShopData({ ...shopData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const msg = validShopSignUp(name, email, phone, password)
        if (msg) {
            return alert(msg)
        }
        const res = await postData("shop/signup", shopData)
        console.log(res)
    }
    return (
        <>
            <Head>
                <title>Đăng ký trở thành người bán</title>
            </Head>
            <div className='flex flex-col items-center justify-center '>
                <div className='bg-gray-200 p-6 rounded mt-12 min-w-[400px]'>
                    <div>
                        <p className='text-lg'>Đăng Ký Trở thành người bán</p>
                    </div>
                    <form onSubmit={handleSubmit} action=''>
                        <div className='flex flex-col '>
                            <input
                                onChange={handleChange}
                                name='name'
                                value={name}
                                className='px-3 py-2 rounded my-2 w-full'
                                type='text'
                                placeholder='Tên Shop'
                            />
                            <input
                                onChange={handleChange}
                                name='email'
                                value={email}
                                className='px-3 py-2 rounded my-2 w-full'
                                type='text'
                                placeholder='Email'
                            />
                            <input
                                onChange={handleChange}
                                name='phone'
                                value={phone}
                                className='px-3 py-2 rounded my-2 w-full'
                                type='text'
                                placeholder='Số điện thoại'
                            />
                            <input
                                onChange={handleChange}
                                name='password'
                                value={password}
                                className='px-3 py-2 rounded my-2'
                                type='password'
                                placeholder='Mật khẩu'
                            />
                            <button
                                type='submit'
                                className='bg-[#f9502f] rounded text-white py-2 uppercase mt-6'
                            >
                                Đăng Ký
                            </button>
                        </div>
                    </form>
                    <div className='flex mt-3'>
                        <p>Bạn đã có tài khoản Shoppee? </p>
                        <Link
                            className='text-[#f9502f] ml-1'
                            href='/shop/login'
                        >
                            {" "}
                            Đăng Nhập
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpShop
