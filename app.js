const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config(); // Load biến môi trường từ .env

const app = express();
const port = process.env.PORT || 3001;

// Cấu hình Express để phục vụ các tệp tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, "public")));

// API trả về giá trị của biến môi trường
app.get("/api/env", (req, res) => {
res.json({ envValue: process.env.MY_ENV_VARIABLE || "Không có giá trị" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);

});
