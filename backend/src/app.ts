import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import { Product } from './models/product';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

Product.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error) => {
    console.log('Error syncing database:', error);
  });