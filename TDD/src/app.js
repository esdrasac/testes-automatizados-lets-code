const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

class App {
    constructor() {
        this.init()
    }

    async init(fn) {
        this.server = express()
        this.server.use(express.json())
        this.server.use(routes)
        
        await mongoose.connect('mongodb+srv://letscode:letscode@cluster0.nwudzbw.mongodb.net/letscode?retryWrites=true&w=majority')
            .then(() => console.log('Mongo connected'))
        
        this.server.listen(3000, () => console.log('Server listening on PORT:::3000'))
    }
}

module.exports = App