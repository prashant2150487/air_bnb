const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')





const app = express();
const port = 3000;
const jwtSecret = 'weufhnez324jkk23bkbb23bk4b23kbioj'

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
app.post('/login', async (req, res) => {
    // mongoose.connect(process.env.MONGO_URL);
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ email: userDoc.email, id: userDoc._id }, jwtSecret, {}, (err,token) => {
                if (err) throw err;
                res.cookie('token', token).json('pass ok')
            });
        } else {
            res.status(422).json('pass not ok')
        }

    } else {
        res.json('not found')
    }

})


app.listen(port, () => {
    console.log('server is listing on port 3000')
})