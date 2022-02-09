const { gql } = require('apollo-server');
const database = require('../database.js');

const typeDefs = gql`
  type Supply {
    id: String
    team: Int
  }
`;

const resolvers = {
  Query: {
    supplies: () => database.supplies,
  },
  Mutation: {
    deleteSupply: (parent, args, context, info) => {
      const deleted = database.supplies.filter((equipment) => {
        return equipment.id === args.id;
      })[0]; // 삭제할 항목 담아두기
      database.supplies = database.supplies.filter((equipment) => {
        return equipment.id !== args.id;
      }); // filter해서 삭제하기
      return deleted; // 담아두었던 삭제 항목 반환하기
    },
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
