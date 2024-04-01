import fastify from "fastify";
import authRoutes from "./routes/auth.js";
import pointRoutes from "./routes/point.js";
import fastifyCors from "@fastify/cors";
import mongoose from "mongoose";

const app = fastify({logger: true});

const dbURI = 'mongodb://localhost:27017/dev-mobile-desafio-ponto';
mongoose.connect(dbURI,)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.register(fastifyCors, {origin: "*"});
app.register(authRoutes);
app.register(pointRoutes);

export default app;
