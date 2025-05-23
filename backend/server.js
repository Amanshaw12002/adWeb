
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
// In server.js or app.js
import cookieParser from 'cookie-parser';

dotenv.config();
connectDB();
const app = express();



app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, 
}));
app.use(express.json());         
app.use('/api/user', userRoutes); 

app.get('/', (_req, res) => {
  res.json({ message: 'API is running ✅' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));