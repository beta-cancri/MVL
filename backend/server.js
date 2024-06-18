const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
