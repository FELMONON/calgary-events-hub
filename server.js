const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/events');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());  // This allows us to parse JSON in request bodies

mongoose.connect('mongodb://localhost:27017/calgary_events_hub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the event routes
app.use('/events', eventRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Calgary Events Hub API');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// ... other imports ...

app.use(cors());

// ... rest of your server code ...