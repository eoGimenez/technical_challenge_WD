const express = require("express");
const app = express();
const cors = require("cors")

const FRONTEND_URL = "http://localhost:3000"

app.set("trust proxy", 1);
app.use(
    cors({
        credentials: true,
        origin: [FRONTEND_URL]
    })
);

const phoneRoutes = require("./routes/phone.routes");
app.use("/api/phones", phoneRoutes);

module.exports = app;