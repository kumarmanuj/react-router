const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all route
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../client/build', 'index.html');

  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('An error occurred');
    }

    // Check if the requested path exists in your React app's routes
    const reactRoutes = ['/', '/about']; // Add all your React app routes here
    const requestedPath = req.path;

    if (!reactRoutes.includes(requestedPath)) {
      // If the path is not in your React routes, set status to 404
      res.status(404);
    }

    // Send the index.html file
    res.send(htmlData);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
