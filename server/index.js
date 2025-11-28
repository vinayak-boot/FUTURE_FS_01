require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Portfolio API is running');
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    let dbSaved = false;
    let emailSent = false;

    try {
        // Save to Database
        if (mongoose.connection.readyState === 1) {
            const newContact = new Contact({ name, email, message });
            await newContact.save();
            dbSaved = true;
        } else {
            console.log('Database not connected, skipping save.');
        }
    } catch (dbError) {
        console.error('Database save error:', dbError);
    }

    try {
        // Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
    } catch (emailError) {
        console.error('Email sending failed:', emailError);
    }

    if (dbSaved || emailSent) {
        res.status(200).json({ message: 'Message sent successfully' });
    } else {
        res.status(500).json({ message: 'Failed to send message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
