const mongoose = require('mongoose')
const server = require('./src/app')

mongoose.connect('mongodb+srv://letscode:letscode@cluster0.nwudzbw.mongodb.net/letscode?retryWrites=true&w=majority')
    .then(() =>{
        console.log('Mongo connected')
        server.listen(3000, () => console.log('Server listening on PORT:::3000'))
    })