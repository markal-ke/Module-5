//index.js



//-------------------------------

const express = require('express')
const app = express()

const testRoutes =
require('./routes/myTestRoutes');

app.use('/mytest', testRoutes);

const apps = require('./app');
const port = 3000
// start the app to listen on the right port
apps.listen(port, () => {
console.log(`app listening at
http://localhost:${port}`)
})

app.get('/test', (req, res) => {
res.send('Hello World!')
})

app.use('/', express.static('public'))

app.listen(port, () => {
console.log(`Example app listening at
http://localhost:${port}`)
})


//-------------------------------


//Exercise 1
const pile = express()
const pileport = 80

pile.get('/', (req, res) => {
res.send('This is a pile of words!')
})

pile.listen(pileport, () => {
console.log(`Example app listening at
http://localhost:${pileport}`)
})

//-------------------------------


//Exercise 2
const calculatorRoutes =
require('./routes/calculatorRoutes');

app.use('/calculator', calculatorRoutes);


//-------------------------------



// Exercise 4
const userRoutes = require('./routes/userRoutes');


app.use('/users', userRoutes);

//-------------------------------


// Exercise 8

const FakeStore = express()
const fakeStorePort = 2626

const FakeStoreRoutes = require('./routes/FakeStoreRoutes');

FakeStore.use('/fakestore', FakeStoreRoutes);

FakeStore.listen(fakeStorePort, () => {
console.log(`Fake Store listening at
http://localhost:${fakeStorePort}`)
})