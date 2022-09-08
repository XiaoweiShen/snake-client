//play.js is pretty dry only prompt and pass conn to input . by Wei
/*eslint linebreak-style: ["error", "windows"]*/

const {connect} = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");

//excute setupInput and pass object conn to input.js
setupInput(connect());



