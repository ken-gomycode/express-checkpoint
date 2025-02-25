import express from "express";
import dotenv from "dotenv";
import path from "path";
import {engine} from "express-handlebars";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Set Handlebars as the view engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Define a route
app.get("/", (req, res) => {
    res.render("home", { title: "Handlebars Landing Page", heroText: "Welcome to Handlebars & TailwindCSS!" });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});