const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB...');

        // Define the same schema
        const Contact = mongoose.model('Contact', new mongoose.Schema({
            name: String,
            email: String,
            message: String,
            date: Date
        }));

        // Fetch all contacts
        const contacts = await Contact.find().sort({ date: -1 });

        console.log('\n--- INBOX (' + contacts.length + ') ---');
        contacts.forEach(c => {
            console.log(`\nFrom: ${c.name} (${c.email})`);
            console.log(`Date: ${c.date}`);
            console.log(`Message: ${c.message}`);
            console.log('-'.repeat(30));
        });

        mongoose.connection.close();
    })
    .catch(err => console.log(err));
