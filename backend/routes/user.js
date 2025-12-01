import { Router } from "express";
import userController from "../controllers/user.js";

const router = Router();

router.post("/user/register", userController.createUser);
router.post("/user/login", userController.login);
router.get("/users", userController.getUsers);
router.delete("/users/:id", userController.deleteUser);
router.patch("/users/:id/role", userController.changeUserRole);

export default router;