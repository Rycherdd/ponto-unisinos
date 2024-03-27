import jwt from "jsonwebtoken";

const secretKey = "secret";

export const verifyToken = async (request, reply) => {
  const token = request.headers["authorization"];

  console.log("Headers");
  console.log(request.headers);
  if (!token) return reply.code(401).send({ message: "Token is missing" });

  try {
    const decoded = jwt.verify(token, secretKey);
    request.user = decoded.user;
    return;
  } catch (err) {
    reply.code(403).send({ message: "Invalid token" });
  }
};
