const User = require("@models/user");

exports.authenticateUser = async (accessToken) => {
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

exports.findAUser = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error("findAUser: Error fetching user", error);
  }
};

exports.updateAUser = async (userId, newData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, newData, { new: true });
    return user;
  } catch (error) {
    throw new Error("updateAUser: Error updating user", error);
  }
};
