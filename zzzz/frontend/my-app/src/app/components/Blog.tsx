import Image from 'next/image'
import React from 'react'

interface Blog {
    id: number
    title: string
    content: string
    image: string
}

const Blog = (props: Blog) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md p-4 text-center">
            <Image
                src={props.image}
                alt={props.title}
                width={500}
                height={300}
                className="w-full h-auto border-b border-gray-300"
            />
            <h2 className="text-2xl font-bold mt-4">{props.title}</h2>
            <p className="text-base text-gray-600">{props.content}</p>
        </div>

    )
}

export default Blog