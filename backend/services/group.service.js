import Group from "../models/group.model";

export const getGroups = (_, res) => {
  Group.find({}).then(({ data }) => res.json(data));
};

export const getGroupById = (req, res) => {
  Group.findById(req.params.id).then(({ data }) => {
    if (!data) {
      res.status(404).json({ message: "Group not found!" });

      throw new Error("Group not found!");
    }

    res.json(data);
  });
};
