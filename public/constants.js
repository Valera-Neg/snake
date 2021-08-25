const IP = 'localhost';
const PORT = 50541;

const commands = {
  MOVE_UP_COMMAND: 'Move: up',
  MOVE_DOWN_COMMAND: 'Move: down',
  MOVE_LEFT_COMMAND: 'Move: left',
  MOVE_RIGHT_COMMAND: 'Move: right'
};

const keys = {
  MOVE_UP_KEY: 'w',
  MOVE_DOWN_KEY: 's',
  MOVE_LEFT_KEY: 'a',
  MOVE_RIGHT_KEY: 'd'
};

const messageKeys = {
  MESSAGE_1: 'g',
  MESSAGE_2: 'k',
  MESSAGE_3: 'l'
};

const MOVES = {
  [keys.MOVE_UP_KEY]: commands.MOVE_UP_COMMAND,
  [keys.MOVE_DOWN_KEY]: commands.MOVE_DOWN_COMMAND,
  [keys.MOVE_LEFT_KEY]: commands.MOVE_LEFT_COMMAND,
  [keys.MOVE_RIGHT_KEY]: commands.MOVE_RIGHT_COMMAND
};

const CLIENT_MESSAGES = {
  conectMessage: '✨Successfully connected to game server🐍',
  playerName: `Name: ${process.argv[2].trim()}`,
  [messageKeys.MESSAGE_1]: 'Say: Go long!',
  [messageKeys.MESSAGE_2]: 'Say: Keep growing!',
  [messageKeys.MESSAGE_3]: "Say: I'm hungry!"
};

const isMovingKey = function(key) {
  let movesKeys = Object.keys(keys);
  for (let mK of movesKeys) {
    if (keys[mK] === key) return true;
  }
  return false;
};

const isMessageKey = function(key) {
  let messageK = Object.keys(messageKeys);
  for (let mK of messageK) {
    if (messageKeys[mK] === key) return true;
  }
  return false;
};

module.exports = { IP, PORT, MOVES, CLIENT_MESSAGES, isMovingKey, isMessageKey, keys }