// src/services/genre.services.js
import Genre from "../models/Genre.js"
class GenreService {
  
  async getAll() {
    return await Genre.find();
  }

  async create(data) {
    const { name, state, description } = data;

    const newGenre = new Genre({
      name,
      state,
      description,
    });

    return await newGenre.save();
  }

  async update(id, data) {
    return await Genre.findByIdAndUpdate(
      id,
      {
        name: data.name,
        state: data.state,
        description: data.description,
        dateUpdated: new Date(),
      },
      { new: true }
    );
  }

  async delete(id) {
    return await Genre.findByIdAndDelete(id);
  }
}

export default new GenreService();
