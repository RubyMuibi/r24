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
      return res.status(400).send("getAuser: userId required");
    }

    if (!user) {
      return res.status(404).send("getAuser: User Not Found");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("getAuser: Internal Error");
  }
};

exports.patchAUser = async (req, res) => {
  const { userId } = req.params;
  const { newData } = req.body;

  if (!userId || !newData) {
    return res.status(404).send("patchAUser: userId and new data required");
  }
  try {
    const user = await updateAUser(userId, newData);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("patchAUser: Internal Error");
  }
};
