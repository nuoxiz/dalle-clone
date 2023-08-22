const express = require("express");

const dotenv = require("dotenv").config();
const cors = require("cors")
const connectDB = require("./mongodb/connect.js")
const postRoutes = requrie("./routes/postRoutes.js")

// import postRoutes from ;
// import dalleRoutes from "./routes/dalleRoutes.js";
// import usersRouter from "./routes/users.js";
// import router from "./routes/auth.js";

dotenv.config();
/* Initialize the server */
const app = express();
/* use cors middleware */
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
console, log("Use user and auth routes");
app.use("/users", usersRouter);
app.use("/auth", router);
app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen("8080", () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
