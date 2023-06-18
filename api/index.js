import productRoute from './routes/productRoute.js'
import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 4000;

app.use(express.json());

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

connectDB().then(() => {
    app.listen(
        PORT, () => console.log(`It's alive on http://localhost:${PORT}`)
    );
}).catch(err => console.log(err));


app.use("/api/products", productRoute);
