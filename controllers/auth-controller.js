exports.register = (req, res, next) => {
  res.status(201).json({ message: "Register success" });
};

exports.login = (req, res, next) => {
  res.status(201).json({ message: "Login success" });
};
