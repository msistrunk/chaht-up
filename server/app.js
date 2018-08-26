const express = require('express');
const query = require('./database/app');

const app = express();
app.use(express.static(`${__dirname}/../dist`));

app.get('/api', async (req, res) => {
  const response = await query();
  res.json({ message: response.rows[0].message_text });
});

app.listen(3001, () => {
  console.log('Listening on port 3001.');
});
