const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Do I need to import `Product` to create the One-To-Many relationship? https://sequelize.org/docs/v6/core-concepts/assocs/#one-to-many-relationships
const Product = require("./Product");
class Category extends Model {}

console.log(sequelize.models);

// Category.init(
Category.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		category_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "category",
	}
);

module.exports = Category;
