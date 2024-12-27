import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { RestaurentRoute } from './app/modules/restaurent/restaurent.route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
  }),
);

app.use('/api/v1/restaurent', RestaurentRoute);

app.use(globalErrorHandler);
app.use(notFound);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Hello World!!!',
  });
});

export default app;
