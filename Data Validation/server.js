const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = require('./app');

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successfully'));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`
    ################################################
    🛡️  Server listening on port: ${PORT} 🛡️
    ################################################
    SERVER IN ${process.env.NODE_ENV} MODE
    `);
});
