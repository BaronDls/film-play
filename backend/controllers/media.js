import mediaService from  "../services/media.service.js";

class MediaController {
  async getMedia(req, res) {
    try {
      const media = await mediaService.getAll();
      res.status(200).json(media);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch media" });
    }
  }

  async createMedia(req, res) {
    try {
      const media = await mediaService.create(req.body);
      res.status(201).json(media);
    } catch (error) {
      res.status(500).json({ error: "Failed to create media" });
    }
  }

  async updateMedia(req, res) {
    try {
      const { id } = req.params;

      const updated = await mediaService.update(id, req.body);

      if (!updated) {
        return res.status(404).json({ message: "Media not found" });
      }

      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ error: "Failed to update media" });
    }
  }

  async deleteMedia(req, res) {
    try {
      const { id } = req.params;

      const deleted = await mediaService.delete(id);

      if (!deleted) {
        return res.status(404).json({ message: "Media not found" });
      }

      res.status(200).json({ message: "Media deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete media" });
    }
  }
}

export default new MediaController();
