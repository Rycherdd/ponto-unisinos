import fastify from "fastify";
import authRoutes from "./routes/auth.js";
import pointRoutes from "./routes/point.js";
import fastifyCors from "@fastify/cors";

const app = fastify({ logger: true });

app.register(fastifyCors, { origin: "*" });
app.register(authRoutes);
app.register(pointRoutes);

export default app;
