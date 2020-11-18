const express = require("express");
const router = express.Router();

const definitionController = require("../../controllers/definition.controller");

// POST - CREATE ONE
router.post("/", definitionController.createDefinition);

// GET - ALL
router.get("/", definitionController.getAll);

// GET - ONE BY ID
router.get("/:id", definitionController.getOneById);

// UPDATE - ONE BY ID
router.put("/:id", definitionController.updateOneById);

// DELETE - ONE BY ID
router.delete("/:id", definitionController.deleteOneById);

module.exports = router;
