import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const initializeConnection = () => {
  mongoose
    .connect(`mongodb://localhost:27017/${process.env.DATABASE_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((client) => console.log(client.connection.host))
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    });
};
