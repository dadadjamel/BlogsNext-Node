// import { getBlogs } from './blog.controller';
// import { Request, Response } from 'express';
// import { blogs } from './blog.controller';

// describe('getBlogs', () => {
//   it('should return a 200 status code', () => {
//     const req = {} as Request;
//     const res = {
//       status: jest.fn(),
//       json: jest.fn(),
//     } as unknown as Response;

//     getBlogs(req, res);

//     expect(res.status).toHaveBeenCalledTimes(1);
//     expect(res.status).toHaveBeenCalledWith(200);
//   });

//   it('should return the correct blog data in JSON format', () => {
//     const req = {} as Request;
//     const res = {
//       status: jest.fn(),
//       json: jest.fn(),
//     } as unknown as Response;

//     getBlogs(req, res);

//     expect(res.json).toHaveBeenCalledTimes(1);
//     expect(res.json).toHaveBeenCalledWith(blogs);
//   });

//   it('should handle an empty blogs array', () => {
//     const originalBlogs = blogs;
//     blogs = []; // mock an empty blogs array

//     const req = {} as Request;
//     const res = {
//       status: jest.fn(),
//       json: jest.fn(),
//     } as unknown as Response;

//     getBlogs(req, res);

//     expect(res.status).toHaveBeenCalledTimes(1);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledTimes(1);
//     expect(res.json).toHaveBeenCalledWith([]);

//     blogs = originalBlogs; // restore the original blogs array
//   });
// });