const { Author } = require("../modules/model");
exports.getauthor = async (req, res) => {
  const n = req.query.page || 0;
  try {
    const getauthor = await Author.find()
      .limit(5)
      .skip(5 * n);
    res.status(200).json(getauthor);
  } catch (err) {
    res.status(404).json({
      errorCode: 404,
      errorMessage: err.message,
    });
  }
};
