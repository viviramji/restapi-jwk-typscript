import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "./../../config/config";

import User, { IUser } from "./../../models/user";

// * create JWT
function createToken(user: IUser) {
  // * generate token
  // * jwt.sign( object, jwtSecret, { expiresIn } );
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400,
  });
}

// * sign Up
export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  //res.send('sign up');
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: "Email or password is required" });
  }

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).json({ message: "Email is already register" });
  }

  const newUser = new User(req.body);
  await newUser.save();

  return res.send({ status: "ok", user: newUser });
};

// * sing in
export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // res.send("sign in");
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: "Email or password is required" });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ message: "This user doesn't exist" });
  }

  const match = await user.comparePassword(req.body.password);

  if (match) {
    return res.status(200).json({ token: createToken(user) });
  }

  return res.status(400).json({ message: "Email or password is incorrect" });
};
