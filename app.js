console.log('Starting App');

/*const fs = require('fs');
//const os = require('os');

const os = require('os');
var user = os.userInfo();
console.log(user);*/
//fs.appendFile('greetings.txt', 'Hello World!!');

var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");
console.log(os.userInfo());