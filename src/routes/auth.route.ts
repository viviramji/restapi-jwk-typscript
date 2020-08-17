import { Router, Request, Response } from "express";

// * importing auth controllers
import { signIn, signUp } from "./../controller/auth/auth.controller";

const router = Router();

// * defining routes
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

export default router;
