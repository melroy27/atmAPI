if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse();
}
const express = require('express');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.log(err);
});

app.use(cors());
app.use('/', indexRouter);
app.listen(process.env.PORT || 3000);