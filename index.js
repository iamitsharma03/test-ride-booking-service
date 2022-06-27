const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
