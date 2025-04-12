import { Model, Optional, DataTypes } from "sequelize";
import { TaskAttributes } from "./task-attributes";
import sequelize from '../config/sequelize';
import User from "./user";

interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    public id!: number;
    public title!: string;
    public description?: string;
    public status!: 'en cours' | 'terminée';
    public due_date?: Date;
    public user_id?: number;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Task.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('en cours', 'terminée'),
        allowNull: false,
        defaultValue: 'en cours'
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      sequelize,
      tableName: 'tasks',
      timestamps: true
    }
);

Task.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Task, { foreignKey: 'user_id', as: 'tasks' });

export default Task;