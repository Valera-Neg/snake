const IP = 'localhost';
const PORT = 50541;

const commands = {
  MOVE_UP_COMMAND: 'Move: up',
  MOVE_DOWN_COMMAND: 'Move: down',
  MOVE_LEFT_COMMAND: 'Move: left',
  MOVE_RIGHT_COMMAND: 'Move: right',
}

const keys = {
  MOVE_UP_KEY: 'w',
  MOVE_DOWN_KEY: 's',
  MOVE_LEFT_KEY: 'a',
  MOVE_RIGHT_KEY: 'd',
}

const MOVES = {
  [keys.MOVE_UP_KEY]: commands.MOVE_UP_COMMAND,
  [keys.MOVE_DOWN_KEY]: commands.MOVE_DOWN_COMMAND,
  [keys.MOVE_LEFT_KEY]: commands.MOVE_LEFT_COMMAND,
  [keys.MOVE_RIGHT_KEY]: commands.MOVE_RIGHT_COMMAND,
};

const CLIENT_MESSAGE = {
  conectMessage: '✨Successfully connected to game server🐍',
  playerName: `Name: ${process.argv[2].trim()}`,
  massaga30: 'Say: Go long!',
  massage60: 'Say: Keep growing!',
  massage100: 'Say: Looks hungry!'
}

const isValidKey = function(key) {
  let movesKeys = Object.keys(keys);
  for (let mK of movesKeys) {
    if (keys[mK] === key) return true;
  }
  return false;
}

module.exports = { IP, PORT, MOVES, CLIENT_MESSAGE, isValidKey }