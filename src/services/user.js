const User = require("../models/user");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.create = async (props) => {
  let { nameSurname, faculty, department, email, studentNumber, password } = props;

  const salt = await bycrypt.genSaltSync(10);
  const hashedPassword = await bycrypt.hashSync(password, salt);

  let user = new User({
    nameSurname: nameSurname,
    faculty: faculty,
    department: department,
    email: email,
    studentNumber: studentNumber,
    password: hashedPassword,
  });

  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return {
    data: user,
    token: token,
  }
};

module.exports.getAll = async (props) => {
  if (props.email) {
    const user = await User.findOne({ email: props.email });
    return user;
  } else {
    const users = await User.find();
    return users;
  }
};

module.exports.getByEmail = async (props) => {
  let { email } = props;

  const user = await User.findOne({ email: email });
  return user;
};

module.exports.login = async (props) => {
  let { email, password } = props;

  let user = await User.findOne({ email: email });
  let isValid = bycrypt.compareSync(password, user.password);

  if (isValid) {
    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return {
      data: user,
      token: token,
    }
  } else {
    return null;
  }
};

module.exports.update = async (props) => {
  let { nameSurname, faculty, department, email, studentNumber, password } = props;

  const salt = await bycrypt.genSaltSync(10);
  const hashedPassword = await bycrypt.hashSync(password, salt);

  let user = await User.findOneAndUpdate(
    { email: email },
    {
      nameSurname: nameSurname,
      faculty: faculty,
      department: department,
      email: email,
      studentNumber: studentNumber,
      password: hashedPassword,
    },
    { new: true }
  );
  return user;
};

module.exports.delete = async (props) => {
  const { email } = props;
  const user = await User.findOneAndDelete({ email: email });
  return user;
};
