import React from 'react'
import Blog from './Blog'

interface IBlog {
    id: number
    title: string
    content: string
    image: string
}

interface IListBlogs {
    blogs: IBlog[]
}

const ListBlogs = (props: IListBlogs) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {props.blogs.map((blog) => (
            <Blog key={blog.id} {...blog}/>
        ))}
    </div>
  )
}

export default ListBlogs