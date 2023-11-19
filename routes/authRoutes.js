import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

//login|| post
router.post('/login', loginController);

//test route
router.get("/test", requireSignIn, isAdmin, testController);

//Protected route auth
router.get("/user-auth", requireSignIn, (request, response) => {
    response.status(200).send({ ok: true });
});
//Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (request, response) => {
    response.status(200).send({ ok: true });
});


export default router