import Media from "../models/Media.js";
import crypto from "crypto";

const mediaPopulate = [
  { path: "Genre", select: "name" },
  { path: "Type", select: "name" },
  { path: "Director", select: "name" },
  { path: "Producer", select: "name" },
];

const generateUrl = (title) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

class MediaService {
  async getAll() {
    return Media.find().populate(mediaPopulate);
  }

  async create(data) {
    const url = generateUrl(data.title);
    const serial = crypto.randomUUID();

    const newMedia = new Media({ ...data, url, serial });
    await newMedia.save();
    return newMedia;
  }

  async update(id, data) {
    const updated = await Media.findByIdAndUpdate(id, data, { new: true })
      .populate(mediaPopulate);

    return updated;
  }

  async delete(id) {
    return Media.findByIdAndDelete(id);
  }
}

export default new MediaService();
