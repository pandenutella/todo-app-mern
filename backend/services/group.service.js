import Group from "../models/group.model.js";

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
