const DummyAsyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      sucess: false,
      message: error.message || "Internal Server Error",
    });
  }
};
export { asyncHandler };


/*

example usage:  
using this wrapper, you can write your route handlers without worrying about try-catch blocks for error handling. The asyncHandler will catch any errors thrown in the asynchronous code and pass them to the next middleware, which is typically an error-handling middleware in Express.js.

import  { asyncHandler } from './utils/asyncHandler';

app.get('/some-route', asyncHandler(async (req, res) => {
  // Your asynchronous code here
  const data = await someAsyncFunction();
  res.json(data);
}));



*/ 