const express = require('express');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect("mongodb+srv://Melroy:" + process.env.DATABASE_URL + "@cluster0.pin1z.mongodb.net/ask-the-master?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.log(err);
});

app.use(cors());
app.use('/', indexRouter);
app.listen(process.env.PORT || 3000);