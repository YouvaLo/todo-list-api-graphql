import { IResolvers } from '@graphql-tools/utils';
import User from '../models/user';

const userResolver: IResolvers = {
    Query: {
      users: async () => await User.findAll(),
      user: async (_, { id }) => await User.findByPk(id)
    },
    Mutation: {
      addUser: async (_, { name, email }) => {
        return await User.create({ name, email });
      }
    },
    User: {
      tasks: async (parent) => await parent.getTasks()
    }
};

export default userResolver;