// const mongoose = require('mongoose')

// const UserSchema = mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = mongoose.model('User', UserSchema)

// mongoose.connect('mongodb+srv://letscode:letscode@cluster0.nwudzbw.mongodb.net/letscode?retryWrites=true&w=majority')
//     .then(async () => {
//         console.log('Mongo Connected')

//         await User.create({
//             name: 'Esdras Aguilar',
//             email: 'esdras@lets.com',
//             password: '123456'
//         })
//     })

const mongoose = require('mongoose')
const { MockMongoose } = require('mock-mongoose')
const mongooseMock= new MockMongoose(mongoose);
 
mongooseMock.prepareStorage().then(async () => {
    await mongoose.connect('mongodb://foobar/baz');
    mongoose.connection.on('connected', () => {  
      console.log('db connection is now open');
    }); 
});