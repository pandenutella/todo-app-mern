import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = mongoose.Schema(
  {
    group: {
      type: Schema.Types.ObjectId,
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
