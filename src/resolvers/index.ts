import { IResolvers } from '@graphql-tools/utils';
import taskResolver from "./task-resolver";
import userResolver from "./user-resolver";

const resolvers: IResolvers<any, any> = {
    Query: {
      ...(userResolver.Query as Record<string, any>),
      ...(taskResolver.Query as Record<string, any>)
    },
    Mutation: {
      ...(userResolver.Mutation as Record<string, any>),
      ...(taskResolver.Mutation as Record<string, any>)
    },
    User: {
      ...(userResolver.User as Record<string, any>)
    },
    Task: {
      ...(taskResolver.Task as Record<string, any>)
    }
};
  
export default resolvers;