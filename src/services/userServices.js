import User from "./../models/user";

export const getAllUsers = async () => {
  return await User.find({});
};

export const getOneUser = async (id) => {
  let user = await User.findById(id);
  let res = user.toObject();
  delete res.password;
  return res;
};

export const addUser = async (user) => {
  return await User.create(user);
};

export const updateUser = async (user) => {
  let res;
  if (user.password) {
    const foundUser = await User.findById(user._id);
    if (!foundUser.validPassword(user.oldPassword)) {
      throw new Error("Incorrect old password");
    }
    foundUser.password = foundUser.encryptPassword(user.password);
    res = await User.findByIdAndUpdate(user._id, foundUser);
  } else {
    res = await User.findByIdAndUpdate(user._id, user);
  }
  return res;
};

export const deleteUser = async (id) => {
  return await User.findOneAndRemove({ _id: id });
};
