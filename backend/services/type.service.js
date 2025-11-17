import Type from "../models/Type.js";

class TypeService {
  async getAll() {
    return Type.find();
  }

  async create(data) {
    const { name, description } = data;

    if (!name || !description) {
      throw new Error("Name and description are required");
    }

    const newType = new Type({
      name,
      description,
      dateCreated: new Date(),
    });

    await newType.save();
    return newType;
  }

  async update(id, data) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error("Invalid ID format");
    }

    const { name, description } = data;

    const updatedType = await Type.findByIdAndUpdate(
      id,
      { 
        name, 
        description,
        dateUpdated: new Date() 
      },
      { new: true, runValidators: true }
    );

    return updatedType;
  }

  async delete(id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error("Invalid ID format");
    }

    return Type.findByIdAndDelete(id);
  }
}

export default new TypeService();
