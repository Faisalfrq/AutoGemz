const db = require("../models/index");
const Feed = db.feed;

exports.getAllFeeds = (req, res) => {
  Feed.find((err, data) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Unable to get any Feedbacks",
      });
    } else {
      return res.status(200).send({
        status: "Success",
        message: "Here are the Feedbacks",
        data: data,
      });
    }
  });
};
exports.addOneFeed = async (req, res) => {
    const {
        email,
        status,
        comment
    } = req.body
    const feed = new Feed({
        email,
        status,
        comment
    })
    feed.save((err, newFeed) => {
        if (err) {
            return res.status(500).send({
                status: "Failed",
                message:"Failed to Give Feedback"
            })
        }
        else {
            return res.status(200).send({
                status: "Success",
                newFeed
            })
        }
    })
}
exports.deleteOneFeed = (req, res) => {
    const { id } = req.params
    Feed.findByIdAndDelete(id, (err, data) => {
        if (err) {
            return res.status(500).send({
                status: "Failed",
                message:"Record not Found"
            })
        }
        else {
            return res.status(200).send({
                status: "Deleted",
                data:data
            })
        }
    })
}
