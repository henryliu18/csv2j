// @desc    feed1
// @route   GET /feed1/filename1
// @access  Public
exports.feed1_file1 = (req, res, next) => {
    res.json({ "todo": "feed1" });
}

// @desc    feed2
// @route   GET /feed2/filename2
// @access  Public
exports.feed2_file2 = (req, res, next) => {
    res.json({ "todo": "feed2" });
}
