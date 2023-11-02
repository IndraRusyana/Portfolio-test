const express = require('express');
const path = require('path');
const app = express();
const HOST = '0.0.0.0'

app.use(express.static(path.join(__dirname, 'public')));

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
