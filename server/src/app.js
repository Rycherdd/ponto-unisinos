import fastify from "fastify";
import authRoutes from "./routes/auth.js";
import pointRoutes from "./routes/point.js";

const app = fastify({ logger: true });

app.register(authRoutes);
app.register(pointRoutes);

export default app;
