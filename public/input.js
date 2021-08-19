const { MOVES, isValidKey } = require('./constants')

const setupInput = function(conn) { 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handeleUserInput(conn)
  return stdin;
}

const handeleUserInput = function(conn){
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (isValidKey(key)) {
      conn.write(MOVES[key]);
    }
  })
}

module.exports = {setupInput};