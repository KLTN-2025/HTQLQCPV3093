import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import reviewRouter from './routes/reviewRoute.js';
import categoryRouter from './routes/category.js';
import statsRouter from './routes/statsRoute.js';
import couponRouter from './routes/couponRoute.js';
import sentimentRouter from './routes/sentimentRoute.js';
import forecastRouter from './routes/forecastRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Khởi tạo kết nối DB và Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());

// ⚡ SỬA ĐỔI QUAN TRỌNG: Cấu hình CORS tường minh
// Dòng này thay thế app.use(cors()); cũ. Nó cho phép Frontend truy cập và gửi/nhận cookie.
app.use(cors({
    origin: 'http://localhost:5173', // Chỉ cho phép truy cập từ địa chỉ Frontend của bạn
    credentials: true // Bật hỗ trợ gửi cookie/session qua CORS
}));

//
app.use('/api/stats', statsRouter);
//
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
//
app.use("/api/reviews", reviewRouter);
//
app.use('/api/category', categoryRouter)
//
app.use('/api/coupon', couponRouter);
//
app.use('/api/analyze-sentiment', sentimentRouter);
//
app.use('/api/forecast', forecastRouter);

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => console.log('Listening on port: ' + port));
