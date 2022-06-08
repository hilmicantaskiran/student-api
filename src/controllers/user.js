const asyncHandler = require("../middleware/async");
const userService = require("../services/user");

module.exports.getUsers = asyncHandler(async (req, res, next) => {
  if (req.body.email) {
    const user = await userService.getByEmail(req.body);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } else {
    const users = await userService.getAll();
    res.status(200).json({
      success: true,
      data: users,
    });
  }
});

module.exports.loginUser = asyncHandler(async (req, res, next) => {
  const user = await userService.login(req.body);
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
  const user = await userService.update(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});

module.exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await userService.delete(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});


