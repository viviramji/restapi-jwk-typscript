import passport, { session } from "passport";
import { Router } from "express";

const router = Router();

router.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
  res.send("Success");
});

export default router;