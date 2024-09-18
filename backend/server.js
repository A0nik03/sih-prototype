import express  from 'express';
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import geocodeRoute from "./routes/geocodeRoute.js"
import adminRouter from './routes/adminRouter.js'
import negotiationRoutes from './routes/negotiationRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// app config
const app = express()
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// middlewares
app.use(express.json())
app.use(cors({
  origin: [
    "https://farmroot-backend.vercel.app",
    "https://farmroot-backend-git-main-bhanu-pratap-singhs-projects-370d22c7.vercel.app",
    "https://farmroot-backend-kuinb4ef6.vercel.app"
  ],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// db connection
connectDB()

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)
app.use('/api/negotiation', negotiationRoutes);
app.use("/api",geocodeRoute)
app.use('/api', adminRouter);

app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))