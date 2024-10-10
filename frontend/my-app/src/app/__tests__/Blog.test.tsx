import { render, screen } from '@testing-library/react';
import Blog from '../components/Blog';

// mock next image to be like a normal image element
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe('Blog Component', () => {
  const blog = {

    id: 1,
    title: 'Introduction to Node.js',
    content: "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
    image: 'https://via.placeholder.com/500x300.png?text=Node.js+Intro'
  };

  it('renders blog image with correct src and alt attributes', () => {
    render(<Blog {...blog} />);
    const imageElement = screen.getByAltText(blog.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', blog.image);
  });

  it('renders blog title with correct text content', () => {
    render(<Blog {...blog} />);
    const titleElement = screen.getByText(blog.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders blog content with correct text content', () => {
    render(<Blog {...blog} />);
    const contentElement = screen.getByText(blog.content);
    expect(contentElement).toBeInTheDocument();
  });
});