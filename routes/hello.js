const { Router } = require("express");
const { getData } = require("../functions");
const router = Router();

router.get("/", (req, res) => {
	res.send("My name is Boss");
});

router.get("/get", (req, res) => {
	res.send();
});

router.post("/post", (req, res) => {
	res.send();
});

module.exports = router;
