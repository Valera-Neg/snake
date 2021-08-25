const { MOVES, isMovingKey, isMessageKey, CLIENT_MESSAGES } = require('./constants');

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handeleUserInput(conn);
  return stdin;
};

const handeleUserInput = function(conn) {
  process.stdin.on('data', (k) => {
    if (k === '\u0003') {
      process.exit();
    } else if (isMovingKey(k)) {
      conn.write(MOVES[k]);
    } else if (isMessageKey(k)) {
      conn.write(CLIENT_MESSAGES[K]);
    }
  });
};

module.exports = {setupInput};