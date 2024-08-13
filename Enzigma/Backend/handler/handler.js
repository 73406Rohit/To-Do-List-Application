const User = require("./../db/User");

async function addUser(userModel) {
  const user = new User({ ...userModel });
  await user.save();
  return user.toObject();
}

async function getUsers() {
  const users = await User.find({});
  return users.map(x => x.toObject());
}

async function getUser(id) {
  const user = await User.findById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user.toObject();
}

async function updateUser(id, userModel) {
  const user = await User.findOneAndUpdate({ _id: id }, userModel, { new: true });
  if (!user) {
    throw new Error('User not found');
  }
  return user.toObject();
}

async function deleteUser(id) {
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user.toObject();
}

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
