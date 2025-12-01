import { Router } from "express";
import userController from "../controllers/user.js";
import {requireRole} from "../middleware/role.js";

const router = Router();

router.post("/register", userController.createUser);
router.post("/login", userController.login);
router.get("/", userController.getUsers);
router.delete("/:id", requireRole("admin"), userController.deleteUser);
router.patch("/:id/role",requireRole("admin"), userController.changeUserRole);

export default router;