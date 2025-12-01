import { Router } from "express";
import userController from "../controllers/user.js";

const router = Router();

router.post("/register", userController.createUser);
router.post("/login", userController.login);
router.get("/", userController.getUsers);
router.delete("/users/:id", userController.deleteUser);
router.patch("/users/:id/role", userController.changeUserRole);

export default router;