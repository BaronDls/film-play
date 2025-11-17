import producerService from "../services/producer.service.js";

class ProducerController {
  async getAllProducers(req, res) {
    try {
      const producers = await producerService.getAll();
      return res.status(200).json(producers);
    } catch (error) {
      return res.status(500).json({
        message: "Error fetching producers",
        error: error.message,
      });
    }
  }

  async createProducer(req, res) {
    try {
      const producer = await producerService.create(req.body);
      return res.status(201).json(producer);
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Error creating producer",
      });
    }
  }

  async updateProducer(req, res) {
    try {
      const { id } = req.params;
      const updatedProducer = await producerService.update(id, req.body);

      if (!updatedProducer) {
        return res.status(404).json({ message: "Producer not found" });
      }

      return res.status(200).json(updatedProducer);
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Error updating producer",
      });
    }
  }

  async deleteProducer(req, res) {
    try {
      const { id } = req.params;
      const deletedProducer = await producerService.delete(id);

      if (!deletedProducer) {
        return res.status(404).json({ message: "Producer not found" });
      }

      return res.status(200).json({ message: "Producer deleted successfully" });
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Error deleting producer",
      });
    }
  }
}

export default new ProducerController();
