import express from "express";
import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/user.js";
// import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/posts", postRoutes);

app.listen(8800, ()=>{
    console.log("Server started on port 3000 http://localhost:8800");
});