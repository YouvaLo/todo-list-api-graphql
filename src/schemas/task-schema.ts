import { gql } from 'apollo-server';

const taskTypeDefs = gql`
    type Task {
        id: ID!
        title: String!
        description: String
        status: String!
        due_date: String
        user: User 
    }

    extend type Query {
        tasks: [Task]
        task(id: ID!): Task
    }

    extend type Mutation {
        addTask(
            title: String!
            description: String
            due_date: String
            user_id: ID
        ): Task
        updateTask(id: ID!, status: String): Task
        deleteTask(id: ID!): Task
    }
`;

export default taskTypeDefs;