import express, { Router } from "express";
import { SignupController } from "../../controllers/auth/SignupController";
import { SigninController } from "../../controllers/auth/SigninController";
import { SignoutController } from "../../controllers/auth/SignoutController";

const router: Router = express.Router();
router.post('/signup', SignupController);
router.post('/signin', SigninController);
router.delete('/signout', SignoutController);

export {
    router
};