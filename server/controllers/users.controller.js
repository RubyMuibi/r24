const { findUser, updateUser } = require("@managers/users.manager");

exports.POST = async (req, res) => {
  try {
    if (req.user) {
      req.logIn(req.user, function (err) {
        if (err) {
          return next(err);
        }
        return res.status(200).json(req.user);
      });
    } else {
      return res.status(200).json({ message: "OTP sent" });
    }
  } catch (error) {
    res.status(500).send(`authUser: Error authenticating user :- ${error}`);
  }
};

exports.GET = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await findUser(userId);

    if (!userId) {
      return res.status(400).send("getAuser:- userId required");
    }

    if (!user) {
      return res.status(404).send("getAuser:- User Not Found");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`getAuser Internal Error :- ${error}`);
  }
};

exports.PATCH = async (req, res) => {
  const { userId } = req.params;
  const { newData } = req.body;

  if (!userId || !newData) {
    return res.status(404).send("patchAUser :- userId and new data required");
  }
  try {
    const user = await updateUser(userId, newData);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`patchAUser :- Internal Error - ${error}`);
  }
};