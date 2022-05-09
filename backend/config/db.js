import mongoose from "mongoose";

export const initializeConnection = () => {
  const name = "todo_app";

  mongoose
    .connect(`mongodb://localhost:27017/${name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((client) => console.log(client.connection.host))
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    });
};
