import express, { Request, Response } from 'express';
import mongoose from "mongoose";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import options from '../swaggerOptions';
import cors from 'cors'; 
require("dotenv").config();
import meetRoutes from "./routes/meetRoutes";
import roleRoutes from './routes/roleRoutes';
import courseRoutes from './routes/courseRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 5000;
const dbName = process.env.MONGO_DB_LOCAL as string;
mongoose
  .connect(dbName, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as mongoose.ConnectOptions) // Type assertion
  .then(() => {
    console.log("DB CONNECTED");
  });
app.use(express.json());
app.use(cors());
app.use("/api/v1", userRoutes);
app.use("/api/v1", meetRoutes);
app.use("/api/v1", roleRoutes);
app.use("/api/v1", courseRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});
const swaggerSpec = swaggerJSDoc(options);
// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});