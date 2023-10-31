import Head from "next/head"
import Link from "next/link"
import React, { useContext, useState } from "react"
import { validUserLogin } from "../../utils/valid"
import { postData } from "../../utils/fetchData"
import { DataContext } from "@/stores/globalState"

const LoginShop = () => {
    const initState = {
        email: "",
        password: "",
    }
    const [userData, setUserData] = useState(initState)
    const { email, password } = userData

    const [state, dispatch] = useContext(DataContext)
    const { auth } = state

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

        const res = await postData(
            "shop/login",
            userData,
            "7c6d6c57973bd235e17fbe4e18ff9648152dd4427d00f3afe116f725a3a7610cea3ae7f57cba66b4bc601da93657f61f5416a69c6456f9e4b722bf0484e24268"
        )
        console.log(res.metadata)

        const data = res.metadata

        dispatch({
            type: "AUTH",
            payload: { token: data.tokens.accessToken, shop: data.shop },
        })
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
                            href='/shop/signup'
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
