import {
    ShoppingBagIcon,
    ShoppingCartIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"

const NavBar = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#f9502f] text-white px-8 sticky top-0 z-[999]'>
            <div className='flex flex-row items-center justify-between mx-auto my-1 w-full max-w-[1200px]'>
                <div className='flex flex-row items-center justify-start text-xs'>
                    <div>
                        <Link href='/shop/login'>Kênh người bán</Link>
                    </div>
                    <span className='after:content-["|"] after:mx-1'></span>
                    <div>
                        <Link href='/shop/register'>Trờ thành người bán</Link>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-end text-sm'>
                    <div>
                        <Link href='/user/register'>Đăng ký</Link>
                    </div>
                    <span className='after:content-["|"] after:mx-1'></span>
                    <div>
                        <Link href='/user/login'>Đăng nhập</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between mx-auto my-3 w-full max-w-[1200px]'>
                <div>
                    <Link href='/' className='flex flex-row items-center'>
                        <ShoppingBagIcon className='w-8 h-8 mr-1' />
                        <p className='text-lg'>Shoppee</p>
                    </Link>
                </div>
                <div className='flex relative items-center justify-center w-full max-w-[1000px]'>
                    <input
                        className='text-gray-900 w-full py-2 px-4 rounded'
                        type='text'
                        placeholder='Search...'
                    />
                    <button className='!absolute top-1 right-1 text-white bg-[#f9502f] rounded py-1 px-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                fillRule='evenodd'
                                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    <Link href='/cart'>
                        <ShoppingCartIcon className='w-8 h-8' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
