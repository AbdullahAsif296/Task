const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Export for testing
module.exports = app;

// Start the server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
