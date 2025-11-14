// File: backend/config/mongodb.js

import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("DB Connected");
    });

    // Dòng này đang bị lỗi, nó đang sử dụng chuỗi kết nối cục bộ:
    // await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");

    // Sửa thành:
    await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;