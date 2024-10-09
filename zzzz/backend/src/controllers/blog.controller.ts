import { Request, Response } from 'express';

const blogs = [
  { id: 1, title: 'Introduction to Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.' },
  { id: 2, title: 'Understanding Express.js', content: 'Express.js is a web application framework for Node.js.' },
  { id: 3, title: 'Getting Started with TypeScript', content: 'TypeScript is a superset of JavaScript that adds static typing.' }
];

// Controller to get all blogs
export const getBlogs = (req: Request, res: Response) => {
  res.status(200).json(blogs);
};

// get blog by id
export const getBlogById = (req: Request, res: Response) => {
  const { id } = req.params;
  const blog = blogs.find((blog) => blog.id === Number(id));
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
}

// delete blog by id
export const deleteBlogById = (req: Request, res: Response) => {
  const { id } = req.params;
  const blogIndex = blogs.findIndex((blog) => blog.id === Number(id));
  if (blogIndex !== -1) {
    blogs.splice(blogIndex, 1);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
}