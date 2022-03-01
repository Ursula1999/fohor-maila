const User = require('../models/userModel');
const mongoose = require('mongoose');;
// use the new name of the database
const url = 'mongodb://localhost:27017/test_database';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true
    });
});
afterAll(async () => { await mongoose.connection.close(); });
describe('User Schema testanything', () => {
    let id = '';
    // the code below is for insert testing
    it('create User testinganything', () => {
        const user = { 
            fullname:"Lalita",
            email:"lalita@gmail.com",
            address:"Lazimpat",
            phone:"232323443",
            citizenshipNo :"685949",
            password :"123456789",

        }
        return User.create(user).then((pro_ret) => {
            id = pro_ret._id
            expect(pro_ret.email).toEqual("lalita@gmail.com");
        });
    });
    
    it('User profile update', async () => {
        return User.findOneAndUpdate({ _id: id },
            { $set: { fullname: "Lalita Shrestha"} }, {"new": true})
            .then((userData) => { expect(userData.fullname).toEqual('Lalita Shrestha') })
    });
        // the code below is for delete testing
    it('to test the delete User is working or not', async () => {
        const status = await User.deleteMany();
        expect(status.deletedCount).toBe(1);
    });
})

