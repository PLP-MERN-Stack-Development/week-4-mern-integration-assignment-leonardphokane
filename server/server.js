// 🌟 Entry point for your Express backend
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 🧩 Import routes and middleware
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorHandler');

// 🚀 Initialize app
const app = express();

// 🛡 Global Middleware
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// 🔍 Default Route
app.get('/', (req, res) => {
  res.send('🔥 MERN Blog API is alive');
});

// 📦 Mount Routes
app.use('/api/posts', postRoutes);

// 🛠 Error Handling
app.use(errorHandler);

// 📡 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
