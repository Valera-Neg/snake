const net = require('net');
const { IP, PORT, CLIENT_MESSAGES } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //interpert inconing data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    
    console.log(CLIENT_MESSAGES.conectMessage),
    conn.write(CLIENT_MESSAGES.playerName);
  });
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('error', err => {
    console.log('Server is not connected');
  });

  return conn;
};

module.exports.connect = connect;