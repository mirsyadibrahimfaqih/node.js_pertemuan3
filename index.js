const express = require("express");
const app = express();
// const express = require("express");
const router = require("./routes/api");
// const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.get("/oxita", (req, res) => {
    res.send("Hello Oxita-sama!");
})

app.get("/students", (req, res) => {
    res.send("Menampilkan semua students");
})

app.post("/students", (req, res) => {
    res.send("Menambahkan data student");
})

app.put("/students", (req, res) => {
    res.send("Mengedit student");
})

app.delete("/students", (req, res) => {
    res.send("Mengahapus student");
})

app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Mengedit student ${id}`);
});

app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Mengahapus student ${id}`);
});

app.listen(3000);