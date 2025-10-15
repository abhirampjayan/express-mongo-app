const express = require('express');


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    console.log(req.query.name);
    res.send('this is post request');
})

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});