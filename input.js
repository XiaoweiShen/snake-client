// function setupInput to setup the feature, get conn from play.js invoke , finished on 09/07 Wei
/*eslint linebreak-style: ["error", "windows"]*/

const {mappings,keyToMessage} = require("./constants");
let connection;

//set input properties
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //open the listener begin to catch key in
  stdin.on("data",handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  // Short circuit if user does the Ctrl-C key
  if (key === '\u0003')
    process.exit();
  // handles direction key strokes
  if (mappings[key]) {
    connection.write(mappings[key]);
  }
  //define several special key g,l,e for send short message to server.
  if (keyToMessage[key]) {
    connection.write(keyToMessage[key]);
  }
};

module.exports = setupInput;

