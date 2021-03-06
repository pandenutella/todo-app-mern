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

export const updateItemProperties = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    for (const property in req.body) item[property] = req.body[property];
    const savedItem = await item.save();

    res.json(savedItem);
  } catch (error) {
    const message = "Item not found!";

    res.status(404).json({ message });
    throw new Error(message);
  }
};

export const deleteItem = async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.id });

    res.json({});
  } catch (error) {
    const message = "Item not found!";

    res.status(404).json({ message });
    throw new Error(message);
  }
};
