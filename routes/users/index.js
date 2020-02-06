const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  getByUsername,
  getByEmail,
  updateByEmail,
  deleteByEmail,
  inputUser,
  deleteAll
} = require("./controller");

router.get("/", getAll);
router.get("/id/:id", getById);
router.get("/username/:username", getByUsername);
router.get("/email/:email", getByEmail);

router.put("/email/:email", updateByEmail);
router.post("/", inputUser);

router.delete("/email/:email", deleteByEmail);
router.delete("/", deleteAll);

module.exports = router;
