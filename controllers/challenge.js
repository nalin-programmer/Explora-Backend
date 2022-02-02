const Challenge = require("../models/challenge");

exports.newChallenge = (req, res) => {
  const { city, badge, name, description, locations } = req.body;

  const _challenge = new Challenge({
    city,
    badge,
    name,
    description,
    locations,
    isvalid: false,
  });

  _challenge.save((error, data) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ error: "Adding Challenge Failed" });
    }

    if (data) {
      return res.status(200).json({
        message: "Success",
      });
    }
  });
};

exports.getChallengeByCity = (req, res) => {
  console.log(req.body);
  const city = req.body.city;
  Challenge.find({ city: city })
    .then((_challenge) => {
      return res.status(200).json(_challenge);
    })
    .catch((err) => {
      return res.status(440).json({ error: "Something went wrong" });
    });
};
