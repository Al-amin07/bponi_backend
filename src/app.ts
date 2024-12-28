import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { RestaurentRoute } from './app/modules/restaurent/restaurent.route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'https://bponi01.netlify.app',
    ],
    credentials: true,
  }),
);

app.use('/api/v1/restaurent', RestaurentRoute);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Hello World!!!',
  });
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
