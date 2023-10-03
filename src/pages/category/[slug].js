import React from "react"

import { categories } from "../../../data"

const CategoryItem = ({ categoryItem }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='max-w-[1200px] w-full mt-4 bg-white'>
                <div className='flex flex-col w-full'>
                    <div className='py-4 pl-4'>
                        <p className='uppercase'>{categoryItem.name}</p>
                    </div>
                    <div className='grid gap-0 grid-cols-10 grid-rows-1 divide-x divide-y'></div>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem

export async function getStaticPaths() {
    const data = categories
    const paths = data.map((category) => ({
        params: { slug: category.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = categories.find((c) => c.slug === params.slug)

    return { props: { categoryItem: res } }
}
