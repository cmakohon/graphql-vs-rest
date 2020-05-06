import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Review from "./resolvers/Review";
import Movie from "./resolvers/Movie";
import Cast from "./resolvers/Cast";
import Actor from "./resolvers/Actor";

const resolvers = {
  Query,
  Mutation,
  Movie,
  Cast,
  Actor,
  Review
};

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      req,
      prisma,
    };
  },
});
//default port is 4000
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
}).catch(error => {
  console.error(error);
});
