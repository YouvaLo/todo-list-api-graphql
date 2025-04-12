import { IResolvers } from '@graphql-tools/utils';
import Task from '../models/task';
import User from '../models/user';
import { TaskAttributes } from '../models/task-attributes';

const taskResolver: IResolvers = {
    Query: {
        tasks: async () => await Task.findAll({ include: [{ model: User, as: 'user' }] }),
        task: async (_, { id }) => await Task.findByPk(id, { include: [{ model: User, as: 'user' }] })
    },
    Mutation: {
        addTask: async (_, { title, description, due_date, user_id }) => {
            return await Task.create({
                title, description, due_date, user_id,
                status: 'en cours'
            });
        },

        updateTask: async (_, { id, status }) => {
            const task = await Task.findByPk(id);
            if (!task) throw new Error("Tâche non trouvée");
            task.status = status;
            await task.save();
            return task;
        },
        
        deleteTask: async (_, { id }) => {
            const task = await Task.findByPk(id);
            if (!task) throw new Error("Tâche non trouvée");
            await task.destroy();
            return task;
        }
    },
    Task: {
        user: async (parent: TaskAttributes) => await User.findByPk(parent.user_id)
    }
};

export default taskResolver;