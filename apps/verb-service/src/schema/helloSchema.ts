import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';

export const typeDefs = gql`
  type Query {
    "The user's username, should be typed in the login field."
    hello: String
    "MORE"
    password: String!
  }

  type User {
    firstName: String
    lastName: String
  }
`;
