/*eslint linebreak-style: ["error", "windows"]*/

const net = require("net");
const { host,port } = require("./constants");

// establishes a connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: host, // IP address from constant.js
    port: port // PORT number from constant.js
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //initial connect to server
  conn.on("connect",() => {
    console.log("Successfully connected to game server!");
    conn.write("Name: Xev");
  });
  //listen and output data from server
  conn.on('data',(data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = {connect};