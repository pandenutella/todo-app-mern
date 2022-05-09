import Group from "../models/group.model.js";
import Item from "../models/item.model.js";

export const getGroups = (_, res) => {
  Group.find({}).then((groups) => res.json(groups));
};

export const getGroupById = (req, res) => {
  Group.findById(req.params.id).then((group) => {
    if (!group) {
      const message = "Group not found!";

      res.status(404).json({ message });
      throw new Error(message);
    }

    res.json(group);
  });
};

export const getGroupByIdWithItems = async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) {
    const message = "Group not found!";

    res.status(404).json({ message });
    throw new Error(message);
  }

  const items = await Item.find({ groupId: group.id });
  res.json({ ...group._doc, items });
};

export const createGroup = (req, res) => {
  Group.create(req.body, (err, data) => {
    if (err) {
      const message = "Failed to create group!";

      res.status(400).json({ message });
      throw new Error(message);
    }

    res.json(data);
  });
};

export const deleteGroup = async (req, res) => {
  try {
    await Group.deleteOne({ id: req.params.id });
  } catch (_) {
    const message = "Failed to delete group!";

    res.status(400).json({ message });
    throw new Error(message);
  }

  res.status(200).json({});
};
