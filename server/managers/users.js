const User = require("@models/user");

exports.authenticateUser = async(accessToken) => {
  const apiURL = "https://api.github.com/user";
  const response = await fetch(apiURL, {
    method: "GET",
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
  const responseData = await response.json();
  return responseData;
};

exports.findAUser = async(userId) => {
  try {
    const users = await User.findById(userId);
    return users;
  } catch (error) {
    throw new Error("findAUser: Error fetching user", error);
  }
};
