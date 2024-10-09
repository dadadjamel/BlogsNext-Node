// src/app/components/ListBlogs.test.tsx

import { render, screen } from '@testing-library/react';
import ListBlogs from './ListBlogs';

describe('ListBlogs Component', () => {
  const blogs = [
    {
      id: 1,
      title: 'Introduction to Node.js',
      content: "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
      image: 'https://via.placeholder.com/500x300.png?text=Node.js+Intro'
    },
    {
      id: 2,
      title: 'Understanding Express.js',
      content: 'Express.js is a web application framework for Node.js.',
      image: 'https://via.placeholder.com/500x300.png?text=Express.js'
    },
    {
      id: 3,
      title: 'Getting Started with TypeScript',
      content: 'TypeScript is a superset of JavaScript that adds static typing.',
      image: 'https://via.placeholder.com/500x300.png?text=TypeScript+Intro'
    }
  ];

  it('renders the list of blogs', () => {
    render(<ListBlogs blogs={blogs} />);
    blogs.forEach((blog) => {
      expect(screen.getByText(blog.title)).toBeInTheDocument();
    });
  });

  it('renders the correct number of blogs', () => {
    render(<ListBlogs blogs={blogs} />);
    const blogItems = screen.getAllByRole('heading', { level: 2 });
    expect(blogItems.length).toBe(blogs.length);
  });
});
