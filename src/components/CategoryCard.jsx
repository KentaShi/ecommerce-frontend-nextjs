import Image from "next/image"
import Link from "next/link"
import React from "react"

const CategoryCard = ({ slug, image, name }) => {
    return (
        <Link
            href={`/${slug}`}
            className='flex flex-col items-center justify-center hover:shadow-lg py-5'
        >
            <div className='flex-shrink-0'>
                <Image src={image} width={80} height={80} />
            </div>
            <div className='text-center'>
                <p className='text-sm'>{name}</p>
            </div>
        </Link>
    )
}

export default CategoryCard
