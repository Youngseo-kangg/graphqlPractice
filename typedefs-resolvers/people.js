const { gql } = require('apollo-server');
const database = require('../database.js');

const typeDefs = gql`
  type People {
    id: ID!
    first_name: String!
    last_name: String!
    sex: Sex!
    blood_type: BloodType!
    serve_years: Int!
    role: Role!
    team: ID!
    from: String!
    tools: [Tool]
    givens: [Given]
  }
`;
const resolvers = {
  Query: {
    people: () => database.people,
    person: (parent, args) => {
      return database.people.filter((el) => {
        el.id === args.id;
      })[0];
    },
  },
};
module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
