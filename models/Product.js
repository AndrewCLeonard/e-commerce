// import important parts of sequelize library
const {
	Sequelize,
	DataTypes,
	Model,
} = require("sequelize");

// const sequelize = new Sequelize("sqlite::memory:");

// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
/**

 const Product = sequelize.define(
	 "Product",
	 {
		 id: {
			 type: DataTypes.INTEGER,
			 allowNull: false,
			 primaryKey: true,
			 autoIncrement: true,
			},
			product_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					isDecimal: true,
					msg: "Must be a decimal",
				},
			},
			stock: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 10,
				validate: {
					isInt: true,
					msg: "Must be an integer",
				},
			},
			category_id: {
				type: DataTypes.INTEGER,
			references: {
				model: "category",
				key: "id",
			},
			// TO DO: references category model's ID
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "product",
	}
	);
	*/
	 Product.init(
		 {
			 id: {
				 type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			validate: {
				isDecimal: true,
				msg: "Must be a decimal",
			},
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
			validate: {
				isInt: true,
				msg: "Must be an integer",
			},
		},
		category_id: {
			type: DataTypes.INTEGER,
			// TO DO: references category model's ID
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "product",
	}
);

module.exports = Product;
