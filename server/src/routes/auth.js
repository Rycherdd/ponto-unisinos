import fp from "fastify-plugin";
import jwt from "jsonwebtoken";

const users = [
  {
    id: "abc123",
    user: "joao",
    password: "123456",
  },
];
const secretKey = "secret";

const schema = {
  body: {
    type: "object",
    properties: {
      user: { type: "string" },
      password: { type: "string" },
    },
    required: ["user", "password"],
  },
};

async function authRoutes(fastify, options) {
  fastify.post("/auth", { schema }, async (request, reply) => {
    const { user, password } = request.body;
    const token = jwt.sign({ user }, secretKey);
    reply.code(200).send({ message: "Autentication succeed", token });
  });
}

export default fp(authRoutes);
