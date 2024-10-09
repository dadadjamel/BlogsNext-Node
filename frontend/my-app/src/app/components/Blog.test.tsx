// src/app/components/Blog.test.tsx

import { render, screen } from '@testing-library/react';
import Blog from './Blog';

describe('Blog Component', () => {
  const blog = {
    id: 1,
    title: 'Introduction to Node.js',
    content: "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
    image: 'https://via.placeholder.com/500x300.png?text=Node.js+Intro'
  };

  it('renders the blog title', () => {
    render(<Blog {...blog} />);
    const titleElement = screen.getByText(/Introduction to Node.js/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the blog content', () => {
    render(<Blog {...blog} />);
    const contentElement = screen.getByText(/Node.js is a JavaScript runtime/i);
    expect(contentElement).toBeInTheDocument();
  });

  it('renders the blog image', () => {
    render(<Blog {...blog} />);
    const imageElement = screen.getByAltText(/Introduction to Node.js/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', blog.image);
  });
});
