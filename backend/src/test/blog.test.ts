import { Request, Response } from 'express';
import { deleteBlogById, getBlogById, getBlogs } from '../controllers/blog.controller';

interface Blog {
    id: number;
    title: string;
    content: string;
}

type Blogs = Blog[];

// Mock data (you can replace this with the real data source if necessary)
const blogs = [
    { id: 1, title: 'Introduction to Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.' },
    { id: 2, title: 'Understanding Express.js', content: 'Express.js is a web application framework for Node.js.' },
    { id: 3, title: 'Getting Started with TypeScript', content: 'TypeScript is a superset of JavaScript that adds static typing.' }
];

describe('getBlogs function', () => {
    let req: Request;
    let res: Response;

    beforeEach(() => {
        req = {} as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return a 200 status code', () => {
        getBlogs(req, res);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should return the correct blog data in JSON format', () => {
        const blogs: Blogs = [
            { id: 1, title: 'Introduction to Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.' },
            { id: 2, title: 'Understanding Express.js', content: 'Express.js is a web application framework for Node.js.' },
            { id: 3, title: 'Getting Started with TypeScript', content: 'TypeScript is a superset of JavaScript that adds static typing.' }
        ];
        getBlogs(req, res);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(blogs);
    });
})


describe('getBlogById function', () => {
    let req: Request;
    let res: Response;

    beforeEach(() => {
        req = {} as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return a blog with the specified ID', () => {
        // Arrange
        req.params = { id: '1' };  // Simulate request with blog ID 1

        // Act
        getBlogById(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            id: 1,
            title: 'Introduction to Node.js',
            content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.',
        });
    });

    it('should return a 404 status if blog is not found', () => {
        // Arrange
        req.params = { id: '999' };  // Simulate request with a non-existent blog ID

        // Act
        getBlogById(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Blog not found' });
    });
});


describe('deleteBlogById function', () => {
    let req: Request;
    let res: Response;

    beforeEach(() => {
        req = {} as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;

        // Reset blogs array before each test to avoid mutation affecting other tests
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return 404 if blog with the specified ID is not found', () => {
        // Arrange
        req.params = { id: '999' };  // Simulate request to delete non-existent blog

        // Act
        deleteBlogById(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Blog not found' });
        expect(blogs.length).toBe(3);  // No blog should be deleted
    });
});


