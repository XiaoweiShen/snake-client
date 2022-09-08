// function setupInput to setup the feature, get conn from play.js invoke , finished on 09/07 Wei
/*eslint linebreak-style: ["error", "windows"]*/

let connection;

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
  
  if (key === '\u0003')
    process.exit();
  if (key === 'a' || key === '\033[D' || key === 'A')
    connection.write("Move: left");
  if (key === 'w' || key === '\033[A' || key === 'W')
    connection.write("Move: up");
  if (key === 'd' || key === '\033[C' || key === 'D')
    connection.write("Move: right");
  if (key === 's' || key === '\033[B' || key === 'S')
    connection.write("Move: down");
};

module.exports = setupInput;

