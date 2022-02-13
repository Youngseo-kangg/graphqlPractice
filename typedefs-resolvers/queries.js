const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    teams: [Team]
    team(id: Int): Team
    equipments: [Equipment]
    supplies: [Supply]
    givens: [Given]
    softwares: [Software]
    software: Software
    people: [People]
    person: People
  }
`;

module.exports = typeDefs;
