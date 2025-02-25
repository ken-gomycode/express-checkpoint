import express from "express";
import dotenv from "dotenv";
import path from "path";
import {engine} from "express-handlebars";

import handlers from './handlers';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Set Handlebars as the view engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Define routes
app.get("/", handlers.renderHomePage);
app.get("/services", handlers.renderServicesPage);
app.get("/contact", handlers.renderContactPage);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});