const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5042;
const IS_DEV = process.env.NODE_ENV !== 'production';
const SRC_DIR = path.join(__dirname, '../../', 'src');
const DIST_DIR = path.join(__dirname, '../../', 'dist');

module.exports = {
  IS_DEV,
  SRC_DIR,
  DIST_DIR,
  PORT
};
