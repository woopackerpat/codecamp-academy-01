const fs = require("fs/promises");
const readFileJSON = async (fileName) => {
  const data = await fs.readFile(fileName, "utf-8");
  return data;
};

const writeFileJSON = async (fileName, data) => {
  await fs.writeFile(fileName, data);
};

module.exports = { readFileJSON, writeFileJSON };
