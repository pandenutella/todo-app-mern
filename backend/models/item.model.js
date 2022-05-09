import mongoose from "mongoose";
import Group from "./group.model";

const itemSchema = mongoose.Schema(
  {
    group: {
      type: Group.Types.ObjectId,
      ref: "Group",
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
