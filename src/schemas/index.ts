import { gql } from 'apollo-server';
import userTypeDefs from './user-schema';
import taskTypeDefs from './task-schema';

const baseTypeDefs = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

export default [baseTypeDefs, userTypeDefs, taskTypeDefs];