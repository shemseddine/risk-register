var express = require("express"),
  router = express.Router();

var Register = require("mongoose").model("Register");

router.route("/").get(function(req, res) {
  Register.find({})
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      return res.send(404);
    });
});

router.route("/").post(function(req, res) {
  let data = req.body;
  console.log({ data });

  new Register(data)
    .save()
    .then(() => res.send(200))
    .catch(err => res.send(400));
});

module.exports = router;
