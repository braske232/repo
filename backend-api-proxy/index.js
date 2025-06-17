require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3001; // Use environment variable for port or default to 3001

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// Configure multer for file uploads (in-memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Basic root route
app.get('/', (req, res) => {
  res.send('Backend API Proxy is running!');
});

// POST endpoint for video transcription
app.post('/api/transcribe', upload.single('videoFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No video file uploaded.' });
  }

  // For now, just log information about the file and send a placeholder response
  console.log('Received file:', {
    filename: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
  });

  // In a future step, this is where you'd process the file buffer (req.file.buffer)
  // and call the Gemini API for transcription.

  res.json({
    message: 'File received successfully. Transcription processing would start here.',
    filename: req.file.originalname
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
