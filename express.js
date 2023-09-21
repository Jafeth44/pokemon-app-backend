import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';


const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use(helmet());

app.use(express.static('public'));

app.use(userRoutes);

export default app;