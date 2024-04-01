import fp from "fastify-plugin";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const secretKey = "secret";

const schema = {
    body: {
        type: "object",
        properties: {
            user: {type: "string"},
            password: {type: "string"},
        },
        required: ["user", "password"],
    },
};

async function authRoutes(fastify, options) {
    fastify.post("/auth", {schema}, async (request, reply) => {
        const {username, password} = request.body;

        try {
            const user = await User.findOne({username}).exec();

            if (!user) {
                return reply.code(401).send({message: "Authentication failed. User not found."});
            }

            const isMatch = await user.comparePassword(password);

            if (isMatch) {
                const token = jwt.sign({username}, secretKey, {
                    expiresIn: "1h",
                });
                reply.code(200).send({message: "Authentication succeeded", token});
            } else {
                reply.code(401).send({message: "Authentication failed. Passwords did not match."});
            }
        } catch (err) {
            throw err;
        }
    });
}

export default fp(authRoutes);
