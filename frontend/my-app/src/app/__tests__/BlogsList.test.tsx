// __tests__/ListBlogs.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import ListBlogs from '../components/ListBlogs'

// Mock the Blog component
jest.mock('../components/Blog', () => () => <div data-testid="mocked-blog" />)

describe('ListBlogs Component', () => {
  const mockBlogs = [
    {
      id: 1,
      title: 'First Blog',
      content: 'Content for the first blog',
      image: 'https://via.placeholder.com/500x300.png?text=First+Blog',
    },
    {
      id: 2,
      title: 'Second Blog',
      content: 'Content for the second blog',
      image: 'https://via.placeholder.com/500x300.png?text=Second+Blog',
    },
    {
      id: 3,
      title: 'Third Blog',
      content: 'Content for the third blog',
      image: 'https://via.placeholder.com/500x300.png?text=Third+Blog',
    },
  ]

  test('renders the correct number of Blog components', () => {
    render(<ListBlogs blogs={mockBlogs} />)

    // Ensure the correct number of Blog components is rendered
    const blogElements = screen.getAllByTestId('mocked-blog')
    expect(blogElements.length).toBe(mockBlogs.length)
  })

  test('renders no Blog components when blogs array is empty', () => {
    render(<ListBlogs blogs={[]} />)
    const blogElements = screen.queryAllByTestId('mocked-blog')
    expect(blogElements.length).toBe(0)
  })

})
