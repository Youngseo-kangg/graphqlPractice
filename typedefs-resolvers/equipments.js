const { gql } = require('apollo-server');
const database = require('../database.js');

const typeDefs = gql`
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
`;

const resolvers = {
  Query: {
    equipments: () => database.equipments,
  },
  Mutation: {
    deleteEquipment: (parent, args, context, info) => {
      const deleted = database.equipments.filter((equipment) => {
        return equipment.id === args.id;
      })[0]; // 삭제할 항목 담아두기
      database.equipments = database.equipments.filter((equipment) => {
        return equipment.id !== args.id;
      }); // filter해서 삭제하기
      return deleted; // 담아두었던 삭제 항목 반환하기
    },
    insertEquipment: (parent, args, context, info) => {
      database.equipments.push(args);
      return args;
    },
    editEquipment: (parent, args, context, info) => {
      return database.equipments
        .filter((equipment) => {
          return equipment.id === args.id;
        })
        .map((equipment) => {
          Object.assign(equipment, args);
          return equipment;
        })[0];
    },
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
