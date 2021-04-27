const express = require("express");
const userController = require("../controller/user");
const Upload = require("../utils/multer");

const router = express.Router();

router
  .route("/")
  .post(Upload.UploadImage, Upload.resizeImage, userController.Create);

module.exports = router;
