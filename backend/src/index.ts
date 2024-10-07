import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/api', async (req: Request, res: Response) => {
    try {
        res.send({ message: 'Hello World!' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
