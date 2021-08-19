const net = require('net');
const { IP, PORT, CLIENT_MESSAGE } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //interpert inconing data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    
    console.log(CLIENT_MESSAGE.conectMessage),
    conn.write(CLIENT_MESSAGE.playerName);
    
    setTimeout(() =>  {
      conn.write(CLIENT_MESSAGE.massaga30)
    }, 10000 );

    setTimeout(() =>  {
      conn.write(CLIENT_MESSAGE.massage60)
    }, 15000 );

    setTimeout(() =>  {
      conn.write(CLIENT_MESSAGE.massage100)
    }, 20000 );
    
  });
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('error', err => {
    console.log('Server is not connected')
  })

  return conn;
}

module.exports.connect = connect;