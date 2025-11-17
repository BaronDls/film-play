// src/services/director.services.js
import Director from "../models/Director.js";

class DirectorService {
  
  async getAll() {
    return await Director.find();
  }

  async create(data) {
    const { name, state, description } = data;
    const newDirector = new Director({
      name,
      state,
      description,
    });
    return await newDirector.save();
  }

  async update(id, data) {
    return await Director.findByIdAndUpdate(
      id,
      {
        name: data.name,
        state: data.state,
        dateUpdated: new Date(),
      },
      { new: true }
    );
  }

  async delete(id) {
    return await Director.findByIdAndDelete(id);
  }
}

export default new DirectorService();
