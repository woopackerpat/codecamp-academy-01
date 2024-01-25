const prisma = require("../config/prisma");
const createError = require("../utils/createError");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      return createError(400, "User already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
      include: {
        profile: true,
      },
    });

    res.status(201).json({ message: "Register success" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!userExist) {
      return createError(400, "Email or password invalid");
    }

    // if (password !== userExist.password) {
    //   return createError(400, "Email or password invalid");
    // }

    const isPasswordMatch = await bcrypt.compare(password, userExist.password);

    if (!isPasswordMatch) {
      return createError(400, "Email or password invalid");
    }
    // delete userExist.password;

    const token = jwt.sign({ id: userExist.id }, process.env.SECRET_KEY);

    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
