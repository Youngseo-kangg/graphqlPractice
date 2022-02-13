const { gql } = require('apollo-server');
const database = require('../database.js');

const typeDefs = gql`
  type Software implements Tool {
    id: String!
    used_by: Role!
    developed_by: String!
    description: String
  }
`;
const resolvers = {
  Query: {
    softwares: () => database.softwares,
    software: (args) => {
      return database.softwares.filter((el) => {
        el.id === args.id;
      })[0];
    },
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
