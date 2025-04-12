import { gql } from 'apollo-server';

const userTypeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        tasks: [Task] 
    }

    extend type Query {
        users: [User]
        user(id: ID!): User
    }

    extend type Mutation {
        addUser(name: String!, email: String!): User
    }
`;

export default userTypeDefs;