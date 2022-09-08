/*eslint linebreak-style: ["error", "windows"]*/
const host = "192.168.56.1";
const port = 50541;
//define direction key
const mappings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  W: "Move: up",
  A: "Move: left",
  S: "Move: down",
  D: "Move: right",
};
//define msg key
const keyToMessage = {
  g: "Say: Gogogo!",
  G: "Say: Gogogo!",
  q: "Say: Lol",
  Q: "Say: Lol",
  e: "Say: Eat one!",
  E: "Say: Eat one!"
};
module.exports = {host,port,mappings,keyToMessage};