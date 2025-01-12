const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
	res.sendStatus(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;