import genreService from '../services/genre.service.js';

class GenreController {

  async getAllGenres(req, res) {
    try {
      const genres = await genreService.getAll();
      res.status(200).json(genres);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createGenre(req, res) {
    try {
      const newGenre = await genreService.create(req.body);
      res.status(201).json(newGenre);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateGenre(req, res) {
    const { id } = req.params;
    try {
      const updatedGenre = await genreService.update(id, req.body);

      if (!updatedGenre) {
        return res.status(404).json({ message: "Genre not found" });
      }

      res.status(200).json(updatedGenre);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteGenre(req, res) {
    const { id } = req.params;
    try {
      const deletedGenre = await genreService.delete(id);

      if (!deletedGenre) {
        return res.status(404).json({ message: "Genre not found" });
      }

      res.status(200).json({ message: "Genre deleted successfully" });

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new GenreController();
