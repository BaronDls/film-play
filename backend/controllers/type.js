import typeService from "../services/type.service.js";

class TypeController {
  async getAllTypes(req, res) {
    try {
      const types = await typeService.getAll();
      return res.status(200).json(types);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createType(req, res) {
    try {
      const type = await typeService.create(req.body);
      return res.status(201).json(type);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async updateType(req, res) {
    try {
      const { id } = req.params;
      const updated = await typeService.update(id, req.body);

      if (!updated) {
        return res.status(404).json({ message: "Type not found" });
      }

      return res.status(200).json(updated);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async deleteType(req, res) {
    try {
      const { id } = req.params;
      const deleted = await typeService.delete(id);

      if (!deleted) {
        return res.status(404).json({ message: "Type not found" });
      }

      return res.status(200).json({ message: "Type deleted successfully" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new TypeController();
