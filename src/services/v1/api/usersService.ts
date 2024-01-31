import User, { IUser } from "../../../models/userModel";

class UserService {
  async getUsers() {
    try {
      const users = await User.find({});
      return users;
    } catch (e) {
      throw new Error(`Users cannot be retrieved ${e}`);
    }
  }
  async createUser(data: IUser) {
    try {
      const { fullName, emailId } = data;
      const newUser = {
        fullName,
        emailId,
        createdAt: new Date(),
      };
      const user = await new User(newUser).save();
      return user;
    } catch (e) {
      throw new Error(`User cannot be added ${e}`);
    }
  }
}

const usersService = new UserService();

export default usersService;
