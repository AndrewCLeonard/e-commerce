const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
router.get("/", (req, res) => {
	Tag.findAll({
		// include its associated Product data
		include: [
			{
				model: Product,
				attributes: ["product_name"],
				required: false,
			},
		],
	})
		.then((dbTagData) => res.json(dbTagData))
		.catch((err) => {
			console.error(err);
			res.status(500).json(err);
		});
});

// find a single tag by its `id`
router.get("/:id", (req, res) => {
	Tag.findOne({
		where: {
			id: req.params.id,
		},
		// include its associated Product data
		include: [
			{
				model: Product,
				attributes: ["product_name"],
				required: false,
			},
		],
	})
		.then((dbTagData) => res.json(dbTagData))
		.catch((err) => {
			console.error(err);
			res.status(500).json(err);
		});
});

// create a new tag
router.post("/", (req, res) => {
	Tag.create({
		tag_name: req.body.tag_name,
	})
		.then((dbTagData) => res.json(dbTagData))
		.catch((err) => {
			console.error(err);
			res.status(500).json(err);
		});
});

// update a tag's name by its `id` value
router.put("/:id", (req, res) => {
	// pass in req.body instead to only update what's passed through
	Tag.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id,
		},
	})
		.then((dbTagData) => {
			if (!dbTagData) {
				res.status(404).json({ message: "No Tag found with this ID." });
				return;
			}
			res.json(dbTagData);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json(err);
		});
});

router.delete("/:id", (req, res) => {
	// delete on tag by its `id` value
	Tag.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbTagData) => {
			if (!dbTagData) {
				res.status(404).json({ message: "No comment found with this id!" });
				return;
			}
			res.json(dbTagData);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json(err);
		});
});

module.exports = router;
