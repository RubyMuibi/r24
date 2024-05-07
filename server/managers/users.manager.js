const { findUserById, updateUserById } = require("@/data/users.data");

exports.findUser = async (userId) => {
  try {
    const user = await findUserById(userId);
    return user;
  } catch (error) {
    throw new Error(`findUser: Error fetching user :- ${error}`);
  }
};

exports.updateUser = async (userId, newData) => {
  try {
    const user = await updateUserById(userId, newData);
    return user;
  } catch (error) {
    throw new Error(`updateUser: Error updating user :- ${error}`);
  }
};
