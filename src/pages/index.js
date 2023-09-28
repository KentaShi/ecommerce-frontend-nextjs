import Image from "next/image"
import { Inter } from "next/font/google"
import { categories } from "../../data"
import CategoryCard from "@/components/CategoryCard"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <div className='flex items-center justify-center'>
            <div className='max-w-[1200px] w-full mt-4 bg-white'>
                <div className='flex flex-col w-full'>
                    <div className='py-4 pl-4'>
                        <p className='uppercase'>Danh mục</p>
                    </div>
                    <div className='grid gap-0 grid-cols-10 grid-rows-1 divide-x divide-y'>
                        {categories.map((cate) => (
                            <CategoryCard
                                key={cate.id}
                                slug={cate.slug}
                                name={cate.name}
                                image={cate.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
