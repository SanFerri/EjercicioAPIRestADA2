import prestamoRoute from "./routes/prestamoRoute";

const express = require("express");
const app = express();
const port = 3000

app.use(express.json());
app.use("/api/", prestamoRoute);

app.listen(port, function () {
    console.log(`App running on port ${port}`);

});
