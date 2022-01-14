import express, { Router } from "express";
import { SignupController } from "../../controllers/auth/SignupController";
import { SigninController } from "../../controllers/auth/SigninController";

const router: Router = express.Router();
router.post('/signup', SignupController);

router.post('/signin', SigninController);

export {
    router
};