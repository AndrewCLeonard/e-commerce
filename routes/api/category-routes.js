const express = require("express");
const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", (req, res) => {
	Category.findAll({
		// include its associated Products
		include: [
			{
				model: Product,
				attributes: ["product_name"],
				required: true,
			},
		],
	})
		.then((dbCategoryData) => res.json(dbCategoryData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// find one category by its `id` value
router.get("/:id", (req, res) => {
	Category.findOne({
		where: {
			id: req.params.id,
		},
		// include its associated Products
		include: [
			{
				model: Product,
				attributes: ["product_name"],
				required: true,
			},
		],
	})
		.then((dbCategoryData) => res.json(dbCategoryData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// create a new category
router.post("/", (req, res) => {
	Category.create({
		category_name: req.body.name,
	})
		.then((dbCategoryData) => res.json(dbCategoryData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
	// update a category by its `id` value
});

router.delete("/:id", (req, res) => {
	// delete a category by its `id` value
});

module.exports = router;
