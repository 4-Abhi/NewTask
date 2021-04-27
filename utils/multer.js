const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log("pathhh is   coorreect", req.originalUrl);
    // if (req.originalUrl === "/api/category") {
    //   console.log("pathhh is   coorreect");
    //   return cb(null, "public/images/orgcategory");
    // }
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];

    const fileName = file.originalname.split(".")[0];

    cb(null, `${fileName}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new App("Not An Image Please Upload Onky Images", 404), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.resizeImage = (req, res, next) => {
  if (!req.file) return next();

  req.body.profile = req.file.filename;

  next();
};

exports.UploadImage = upload.single("profile");
