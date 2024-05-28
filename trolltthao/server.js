// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 1200;

app.use(bodyParser.json());
app.use(cors());

let responses = [];

app.post('/submit', (req, res) => {
    const { userResponse, userReason } = req.body;
    responses.push({ userResponse, userReason });
    // Trả về một JSON response báo hiệu rằng dữ liệu đã được gửi thành công
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
