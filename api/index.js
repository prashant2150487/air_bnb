const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');



const app = express();
const port = 3000;

app.use(express.json())
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:5173'
    }
))

mongoose.connect(process.env.MONGO_URL)
app.get('/test', (req, res) => {
    res.send('Hello word');

})

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword)
        const userDoc = await User.create({ name, email, password: hashedPassword });
        res.json(userDoc)
    } catch (e) {
        res.status(422).json("")
    }
})


app.listen(port, () => {
    console.log('server is listing on port 3000')
})