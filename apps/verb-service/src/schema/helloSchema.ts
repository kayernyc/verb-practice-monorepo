import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';

export const typeDefs = gql`
  type Query {
    "The user's username, should be typed in the login field."
    hello: String
    "Describe the verb requested, including whether to return matching verbs in another language."
    verb(language: Language!, infinitive: String!): String
    "MORE"
    password(mot: String!): String
  }

  enum Language {
    de
    en
    fr
  }

  type Verb {
    language: String
  }
`;
