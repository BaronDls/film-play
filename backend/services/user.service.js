import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserService {
  async createUser({ name, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });
    return await newUser.save();
  }

  async login({ email, password }) {
    const user = await User.findOne({ email });
    if (!user) return null;

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return null;

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { token, user: { id: user._id, name: user.name, role: user.role } };
  }

  async getAll() {
    return await User.find().select("-password");
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }

  async changeRole(id, role) {
    return await User.findByIdAndUpdate(id, { role }, { new: true }).select("-password");
  }
}

export default new UserService();