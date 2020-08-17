import { Request, Response } from "express";

import User, { IUser } from "./../../models/user";

// * signUp
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

export const signIn = (req: Request, res: Response) => {
  res.send("sign in");
};
