import express, { Request, Response } from 'express';
import blogRoutes from './router/blogs.router';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/blogs', blogRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Node.js TypeScript API!');
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
