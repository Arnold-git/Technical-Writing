const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'developement') {
  app.use(morgan('dev'));
}

app.use(express.json());

// app.use('/api/v1/userRouter', userRouter);
// app.use('/api/v1/commentRouter', commentRouter);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome Data Validationn article API',
  });
});

app.use('/api/v1/user', userRouter);

app.all('*', (req, res) => {
  return res.status(404).json({
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

module.exports = app;
