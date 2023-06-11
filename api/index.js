import productRoute from './routes/productRoute.js'
import express from 'express'

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);

app.use("/api/products", productRoute);
