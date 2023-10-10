import Head from "next/head"
import Link from "next/link"
import React from "react"

const Register = () => {
    return (
        <>
            <Head>
                <title>Đăng ký tài khoản</title>
            </Head>

            <div className='flex flex-col items-center justify-center '>
                <div className='bg-gray-200 p-6 rounded mt-12 min-w-[400px]'>
                    <div>
                        <p className='text-lg'>Đăng Ký</p>
                    </div>
                    <form action=''>
                        <div className='flex flex-col '>
                            <input
                                className='px-3 py-2 rounded my-2 w-full'
                                type='text'
                                placeholder='Họ tên'
                            />
                            <input
                                className='px-3 py-2 rounded my-2 w-full'
                                type='text'
                                placeholder='Email'
                            />
                            <input
                                className='px-3 py-2 rounded my-2 w-full'
                                type='text'
                                placeholder='Số điện thoại'
                            />
                            <input
                                className='px-3 py-2 rounded my-2'
                                type='password'
                                placeholder='Mật khẩu'
                            />
                            <input
                                className='px-3 py-2 rounded my-2'
                                type='password'
                                placeholder='Nhập lại mật khẩu'
                            />
                            <button className='bg-[#f9502f] rounded text-white py-2 uppercase mt-6'>
                                Đăng Ký
                            </button>
                        </div>
                    </form>
                    <div className='flex mt-3'>
                        <p>Bạn đã có tài khoản Shoppee? </p>
                        <Link
                            className='text-[#f9502f] ml-1'
                            href='/user/login'
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

export default Register
