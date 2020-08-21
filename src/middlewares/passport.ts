import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "./../config/config";
import UserModel from "./../models/user";

const strategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

export default new Strategy(strategyOptions, async (payload, done) => {
  try {
    const user = await UserModel.findById(payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, null);
  } catch (error) {
    console.log(error);
  }
});
