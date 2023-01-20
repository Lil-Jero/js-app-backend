const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT || 5000

// Connexion a la db
connectDB();

const app = express();

// Authorisation cors
app.use(cors({
    origin: 'https://jeromevoipierre.fr',
    credentials: true,
    optionsSuccessStatus: 200,
}))

// Middleware qui permet de traiter les données de la request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/post", require("./routes/post.routes"))


// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port))