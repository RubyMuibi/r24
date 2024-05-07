const User = require("@/models/user.model");

exports.findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error(`findUserById: Error fetching user: ${error}`);
  }
};

exports.findUserEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    throw new Error(`findUserEmail: Error fetching user :- ${error}`);
  }
};

exports.createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error(`createUser: Error creating user :- ${error}`);
  }
};

exports.updateUserById = async (userId, newData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, newData, { new: true });
    return user;
  } catch (error) {
    throw new Error(`updateUser: Error updating user :- ${error}`);
  }
};
