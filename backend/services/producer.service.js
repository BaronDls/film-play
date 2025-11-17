import Producer from "../models/Producer.js";

class ProducerService {
  async getAll() {
    return Producer.find();
  }

  async create(data) {
    const { name, state, slogan, description } = data;

    if (!name || !state || !slogan || !description) {
      throw new Error("All fields are required");
    }

    const newProducer = new Producer({
      name,
      state,
      slogan,
      description,
    });

    await newProducer.save();
    return newProducer;
  }

  async update(id, data) {
    const { name, state, slogan, description } = data;

    // Validación básica para MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error("Invalid ID format");
    }

    const updatedProducer = await Producer.findByIdAndUpdate(
      id,
      { name, state, slogan, description },
      { new: true, runValidators: true }
    );

    return updatedProducer; 
  }

  async delete(id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error("Invalid ID format");
    }

    return Producer.findByIdAndDelete(id); 
  }
}

export default new ProducerService();
