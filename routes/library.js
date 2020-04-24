const express = require("express");
const router = express.Router();
const library = require("../controllers/library");

router.post("/post", library.create);
router.get("/get",library.getBook);
router.get("/get/:libraryId",library.getBookById);
router.delete("/del/:libraryId",library.deleteBookById);
router.put("/edit/:libraryId", library.editBookById)

module.exports = router;