import fp from "fastify-plugin";
import { verifyToken } from "../middlewares/verifyToken.js";

const points = [
  {
    times: ["08:00", "12:00", "13:00", "17:00"],
    idUser: "abc123",
    date: "2024-03-26",
    created_at: "2024-03-26T08:15:00",
  },
  {
    times: ["07:30", "12:30", "13:30", "17:30"],
    idUser: "abc123",
    date: "2024-03-26",
    created_at: "2024-03-26T07:30:00",
  },
  {
    times: ["09:00", "12:15", "13:45", "18:00"],
    idUser: "abc123",
    date: "2024-03-27",
    created_at: "2024-03-27T09:20:00",
  },
  {
    times: ["08:45", "12:45", "14:00", "17:45"],
    idUser: "abc123",
    date: "2024-03-27",
    created_at: "2024-03-27T08:50:00",
  },
  {
    times: ["08:30", "12:30", "13:45", "17:30"],
    idUser: "abc123",
    date: "2024-03-28",
    created_at: "2024-03-28T08:30:00",
  },
];

async function pointRoutes(fastify, options) {
  fastify.post(
    "/point_register",
    { preHandler: verifyToken },
    async (request, reply) => {
      const point = request.body;
      points.push({ point });
      reply.code(200).send({ message: "Point stored successfully" });
    }
  );

  fastify.get(
    "/points_history",
    // { preHandler: verifyToken },
    async (request, reply) => {
      reply.code(200).send(points);
    }
  );
}

export default fp(pointRoutes);
