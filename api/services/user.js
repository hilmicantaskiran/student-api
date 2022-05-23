const User = require("../models/user");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.create = async (props) => {
  let { email, studentNumber, password } = props;

  const salt = await bycrypt.genSaltSync(10);
  const hashedPassword = await bycrypt.hashSync(password, salt);

  let user = new User({
    email: email,
    studentNumber: studentNumber,
    password: hashedPassword,
  });

  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return token;
};

module.exports.getAll = async () => {
  const users = await User.find();
  return users;
};

module.exports.getByEmail = async (email) => {
  await User.findOne({ email: email }).then((user) => {
    const isValid = bycrypt.compareSync(password, user.password);
    if (isValid) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return {
        accessToken: token,
      };
    }
  });
};

module.exports.update = async (email, props) => {
  let { studentNumber, password } = props;

  const salt = await bycrypt.genSaltSync(10);
  const hashedPassword = await bycrypt.hashSync(password, salt);

  let user = await User.findOneAndUpdate(
    { email: email },
    {
      email: email,
      studentNumber: studentNumber,
      password: hashedPassword,
    },
    { new: true }
  );
  return user;
};

module.exports.delete = async (email) => {
  const user = await User.findOneAndDelete({ email: email });
  return user;
};
