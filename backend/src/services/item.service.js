import Item from "../models/item.model.js";

export const getItems = (_, res) => {
  Item.find({}).then((items) => res.json(items));
};

export const getItemById = (req, res) => {
  Item.findById(req.params.id).then((item) => {
    if (!item) {
      const message = "Item not found!";

      res.status(404).json({ message });
      throw new Error(message);
    }

    res.json(item);
  });
};

export const createItem = (req, res) => {
  Item.create(req.body, (err, data) => {
    if (err) {
      const message = "Failed to create item!";

      res.status(400).json({ message });
      throw new Error(message);
    }

    res.json(data);
  });
};
