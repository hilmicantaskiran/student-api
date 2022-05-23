const asyncHandler = require("../middleware/async");
const userService = require("../services/user");

module.exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await userService.getAll();
  res.status(200).json({
    success: true,
    data: users,
  });
});

module.exports.getUserByEmail = asyncHandler(async (req, res, next) => {
  const user = await userService.getByEmail(req.params.email);
  res.status(200).json({
    success: true,
    data: user,
  });
});

module.exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await userService.create(req.body);
  res.status(201).json({
    success: true,
    data: user,
  });
});

module.exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await userService.update(req.params.email, req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});

module.exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await userService.delete(req.params.email);
  res.status(200).json({
    success: true,
    data: user,
  });
});


