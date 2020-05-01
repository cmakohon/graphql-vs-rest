import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    movie(
      mid: Int!
    ): Movie!
    movies: [Movie!]!
    actor(
      aid: Int!
    ): Actor!
    actors: [Actor!]!
    cast: [Cast!]!
  }
  
  type Movie {
    mid: ID!
    budget: Float
    release: String
    revenu: Float
    runtime: Int
    title: String
    cast: [Cast]
  }

  type Actor {
    aid: ID!
    birthdate: String
    gender: String
    name: String
    cast: [Cast]
  }
  
  type Cast {
    actor: Actor
    billing: Int
    movie: Movie
    role: String
  }
`;

//@key(fields: "billing actor { id } movie { id }")