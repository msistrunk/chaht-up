const { Client } = require('pg');

const connectionString = 'postgresql://jpangelle@localhost:5432/chaht';

const client = new Client({
  connectionString,
});
client.connect();

function query() {
  return client.query(
    'select message_text from messages where message_id=1',
  );
}

module.exports = query;
