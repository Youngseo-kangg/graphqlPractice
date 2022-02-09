const database = require('./database');
const { ApolloServer, gql } = require('apollo-server');
const { argsToArgsConfig } = require('graphql/type/definition');

const queries = require('./typedefs-resolvers/queries');
const mutation = require('./typedefs-resolvers/mutations');
const equipments = require('./typedefs-resolvers/equipments');
const supply = require('./typedefs-resolvers/supply');
const teams = require('./typedefs-resolvers/teams');

const typeDefs = [
  queries,
  mutation,
  equipments.typeDefs,
  supply.typeDefs,
  teams.typeDefs,
];

const resolvers = [equipments.resolvers, supply.resolvers, teams.resolvers];

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
