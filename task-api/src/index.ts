import cors from "cors";
import express from "express";
import taskRoutes from "./routes/taskRoutes";

const app = express();

// Habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de la API
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
