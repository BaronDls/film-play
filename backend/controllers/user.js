import userService from "../services/user.service.js";

class userController {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      await userService.createUser({ name, email, password });
      res.status(201).json({ message: "Usuario creado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al crear el Usuario" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await userService.login({ email, password });
      if (!result) return res.status(401).json({ message: "Credenciales inválidas" });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // admin endpoints
  async getUsers(req, res) {
    try {
      const users = await userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleted = await userService.delete(id);
      if (!deleted) return res.status(404).json({ message: "Usuario no encontrado" });
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async changeUserRole(req, res) {
    try {
      const { id } = req.params;
      const { role } = req.body;
      const updated = await userService.changeRole(id, role);
      if (!updated) return res.status(404).json({ message: "Usuario no encontrado" });
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new userController();