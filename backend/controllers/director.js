import directorService from "../services/director.service.js";
class DirectorController {

  async getAllDirectors(req, res) {
    try {
      const directors = await directorService.getAll();
      res.status(200).json(directors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createDirector(req, res) {
    try {
      const newDirector = await directorService.create(req.body);
      res.status(200).json(newDirector);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateDirector(req, res) {
    const { id } = req.params;
    try {
      const updatedDirector = await directorService.update(id, req.body);

      if (!updatedDirector)
        return res.status(404).json({ message: "Director not found" });

      res.status(200).json(updatedDirector);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteDirector(req, res) {
    const { id } = req.params;
    try {
      const deletedDirector = await directorService.delete(id);

      if (!deletedDirector)
        return res.status(404).json({ message: "Director not found" });

      res.status(200).json({ message: "Director deleted successfully" });

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new DirectorController();
