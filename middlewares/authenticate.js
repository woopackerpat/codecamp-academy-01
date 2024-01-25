const prisma = require("../config/prisma");
const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return createError(400, "You are unauthorized");
    }

    const arrayToken = authorization.split(" ");
    const token = arrayToken[1];

    if (arrayToken[0] !== "Bearer" || !token) {
      return createError(400, "You are unauthorized");
    }

    const payload = jwt.verify(token, process.env.SECRET_KEY);

    if (
      typeof payload !== "object" ||
      !payload?.id ||
      typeof payload.id !== "number"
    ) {
      return createError(400, "Payload is invalid");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      return createError(400, "User not found");
    }

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
