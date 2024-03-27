import fp from "fastify-plugin";
import { verifyToken } from "../middlewares/verifyToken.js";

const pontos = [
  {
    horarios: ["08:00", "12:00", "13:00", "17:00"],
    idUsuario: "abc123",
    date: "2024-03-26",
    created_at: "2024-03-26T08:15:00",
  },
  {
    horarios: ["07:30", "12:30", "13:30", "17:30"],
    idUsuario: "abc123",
    date: "2024-03-26",
    created_at: "2024-03-26T07:30:00",
  },
  {
    horarios: ["09:00", "12:15", "13:45", "18:00"],
    idUsuario: "abc123",
    date: "2024-03-27",
    created_at: "2024-03-27T09:20:00",
  },
  {
    horarios: ["08:45", "12:45", "14:00", "17:45"],
    idUsuario: "abc123",
    date: "2024-03-27",
    created_at: "2024-03-27T08:50:00",
  },
  {
    horarios: ["08:30", "12:30", "13:45", "17:30"],
    idUsuario: "abc123",
    date: "2024-03-28",
    created_at: "2024-03-28T08:30:00",
  },
];

async function pointRoutes(fastify, options) {
  fastify.post(
    "/registro_ponto",
    { preHandler: verifyToken },
    async (request, reply) => {
      const { usuario } = request;
      const ponto = request.body.ponto;
      if (usuario && ponto) {
        pontos.push({ usuario, ponto });
        reply.code(200).send({ message: "Ponto registrado com sucesso" });
      } else {
        reply.code(400).send({ message: "Parâmetros inválidos" });
      }
    }
  );

  fastify.get(
    "/historico_pontos",
    { preHandler: verifyToken },
    async (request, reply) => {
      reply.code(200).send(pontos);
    }
  );
}

export default fp(pointRoutes);
