const { authenticateUser, findAUser, updateAUser } = require("@managers/users");

exports.authUser = async (req, res) => {
  try {
    const githubCode = req.query.code;
    const apiURL = "https://github.com/login/oauth/access_token";
    const params = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${githubCode}`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(`${apiURL}${params}`, requestOptions);
    const responseData = await response.json();
    const accessToken = responseData.access_token;
    const authUser = await authenticateUser(accessToken);
    res.status(200).json(authUser);
  } catch (error) {
    res.status(500).send("authUser: Error authenticating user", error);
  }
};

exports.getAUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await findAUser(userId);

    if (!userId) {
      res.status(400).send("getAuser: userId required");
    }

    if (!user) {
      res.status(404).send("getAuser: User Not Found");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("getAuser: Internal Error", error);
  }
};

exports.patchAuser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { newData } = req.body;

    const user = await updateAUser(userId, newData);

    if (!userId || !newData) {
      res.status(400).send("patchAuser: userId and new data required");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("patchAuser: Internal Error", error);
  }
};
