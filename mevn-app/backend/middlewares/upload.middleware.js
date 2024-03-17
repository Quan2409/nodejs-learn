const multer = require("multer");
const path = require("path");

const createStorage = (userFolder) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      const destPath = path.join("./public/images", userFolder);
      cb(null, destPath);
    },

    filename: (req, file, cb) => {
      req.prefix = Date.now();
      cb(null, req.prefix + "_" + file.originalname);
    },
  });
};

const getUpload = (userFolder, field, maxCount = null) => {
  const storage = createStorage(userFolder);
  const upload = multer({ storage: storage });
  return maxCount ? upload.array(field, maxCount) : upload.single(field);
};

module.exports = {
  getUpload,
};
