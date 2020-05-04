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
    reviews: [Review]
  }

  type Actor {
    aid: ID!
    birthdate: String
    gender: String
    name: String
    cast: [Cast]
  }
  
  type Cast {
    aid: ID!
    actor: Actor!
    billing: Int!
    mid: ID!
    movie: Movie!
    role: String
  }

  type Review {
    id: ID!
    mid: ID!
    text: String
    movie: Movie!
  }
`;