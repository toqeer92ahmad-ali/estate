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

export const google = async (req, res, next) => {

try {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password, ...rest } = user._doc;
    res
    .cookies('access_token', token, {httpOnly: true})
    .status(200)
    .json(rest);
  }
  else {
    const generayedPassword= Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
    const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
    const newUser = ({username: req.body.name.split("").join("").toLowerCase + Math.random().toString(36).slice(-8) , email: req.body.email, password: hashedPassword, avatar: req.body.photo})
    await newUser.save();
    const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET);
    const { password: pass, ...rest} = newUser._doc;
    res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
  }

} catch (error) {
  next(error)
}
}