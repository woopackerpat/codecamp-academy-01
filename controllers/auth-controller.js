const prisma = require("../config/prisma");
const createError = require("../utils/createError");

exports.register = async (req, res, next) => {
  try {
    const { email, password, bio } = req.body;

    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      return createError(400, "User already exist");
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        profile: {
          create: {
            bio,
          },
        },
      },
      include: {
        profile: true,
      },
    });

    res.status(201).json({ user: newUser });
  } catch (err) {
    next(err);
  }
};

exports.login = (req, res, next) => {
  res.status(201).json({ message: "Login success" });
};
