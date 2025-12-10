import { Router } from "express";
import userController from "../controllers/user.js";
import { requireRole } from "../middleware/role.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();

router.post("/register", userController.createUser);
router.post("/login", userController.login);

router.get("/", authRequired, userController.getUsers);
router.delete("/:id", authRequired, requireRole("administrador"), userController.deleteUser);
router.patch("/:id/role", authRequired, requireRole("administrador"), userController.changeUserRole);

export default router;