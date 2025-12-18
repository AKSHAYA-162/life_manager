const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  displayName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

const Project = sequelize.define("Project", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name: DataTypes.STRING,
  userId: {
    type: DataTypes.UUID,
    references: {
      model: "User",
      key: "id",
    },
  },
});

const Todo = sequelize.define("Todo", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  title: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  dueDate: DataTypes.DATE,
  type: DataTypes.ENUM("In Progress", "Completed", "Due"),
});

module.exports = { sequelize, User, Project, Todo };
