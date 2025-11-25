import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser)  return next (errorHandler(404, 'User not found'));
    const passwordIsValid = bcrypt.compareSync(password, validUser.password);
    if (!passwordIsValid) return next(errorHandler(401, 'Wrong credentials!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res.cookie('access_token', token, { httpOnly: true }).status(200).json (rest);
  } catch (error) {
    next(error);
  }
};