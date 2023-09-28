import Link from "next/link"
import React from "react"

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
            <div className='bg-gray-200 p-6 rounded mt-12 min-w-[400px]'>
                <div>
                    <p className='text-lg'>Đăng Nhập</p>
                </div>
                <form action=''>
                    <div className='flex flex-col '>
                        <input
                            className='px-3 py-2 rounded my-2 w-full'
                            type='text'
                            placeholder='Email/Số điện thoại/Tên đăng nhập'
                        />
                        <input
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
                        href='/buyer/register'
                    >
                        {" "}
                        Đăng Ký
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
