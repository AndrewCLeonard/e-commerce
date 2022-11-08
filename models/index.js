// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const sequelize = require("../config/connection");
// const associations = require("./associations");

// Products belongsTo Category
Product.belongsTo(Category, {
	foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
	foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
	Product,
	Category,
	Tag,
	ProductTag,
	// associations,
};
