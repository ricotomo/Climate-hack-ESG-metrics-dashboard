import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { ProductResolver } from "./resolvers/ProductResolver";
import cors from "cors";

const main = async () => {
  const app = express();

  const conn = await createConnection();
  conn.runMigrations();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    }),
  );

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
