const fs = require("fs/promises");
exports.readFileJSON = async (fileName) => {
  const data = await fs.readFile(fileName, "utf-8");
  return data;
};

exports.writeFileJSON = async (fileName, data) => {
  await fs.writeFile(fileName, data);
};

// module.exports = { readFileJSON, writeFileJSON };
