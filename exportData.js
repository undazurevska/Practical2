const fs = require('fs');

// Read the JSON data from songs-list.json
const rawData = fs.readFileSync('songs-list.json', 'utf8');

// Parse the JSON data
const jsonData = JSON.parse(rawData);

// Export the JSON data
module.exports = jsonData;
