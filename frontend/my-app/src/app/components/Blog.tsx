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
            <h2 className="text-2xl font-bold mt-4">{props.title}</h2>
            <p className="text-base text-gray-600">{props.content}</p>
        </div>

    )
}

export default Blog