import 'dotenv/config';
import { dbConnection } from './database/database.config.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';

const {PORT} = process.env;

const app = express();

dbConnection();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use(helmet());

app.use(express.static('public'));

//* Rutas
app.use(userRoutes);
app.use(postRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
})