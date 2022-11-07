import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import ShortUniqueId from "short-unique-id";
import { poolRouts } from "./routes/poll";
import { guessRouts } from "./routes/guess";
import { userRouts } from "./routes/user";
import { gameRouts } from "./routes/game";
import { authRoutes } from "./routes/auth";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: "hausidhuasidas",
  });

  await fastify.register(poolRouts);
  await fastify.register(authRoutes);
  await fastify.register(gameRouts);
  await fastify.register(guessRouts);
  await fastify.register(userRouts);

  await fastify.listen({ port: 3333 /*, host: "0.0.0.0" */ });
}

bootstrap();
//
