import { Server } from 'https://deno.land/std@0.166.0/http/server.ts';
import { GraphQLHTTP } from 'https://deno.land/x/gql@1.1.2/mod.ts';
import { makeExecutableSchema } from 'https://deno.land/x/graphql_tools@0.0.2/mod.ts';

import { typeDefs } from './schema/helloSchema.ts';
import { verbResolver } from './resolvers/verbResolver.ts';

const port = 3060;

// TODO: convert to OAK

const resolvers = {
  Query: {
    hello: () => `Hello, World!`,
    password: (_: unknown, { mot }: { mot: string }): string => {
      console.log('these are args', mot);
      return `this is mot ${mot}`;
    },
    verb: verbResolver,
  },
};

const schema = makeExecutableSchema({ resolvers, typeDefs });

const server = new Server({
  handler: async (req) => {
    const { pathname } = new URL(req.url);

    return pathname === '/graphql'
      ? await GraphQLHTTP<Request>({
          schema,
          graphiql: true,
        })(req)
      : new Response('Not Found', { status: 404 });
  },
  port,
});

server.listenAndServe();
