const program = require("commander")
const crypto = require('crypto');
const { description, version, name } = require('./package.json') 


program
  //Load cosmetic settings from package.json
  .version(version)
  .name(name)
  .description(description)
  //Option, to iterate number
  .option("-s, --sequence <seq>", "Display a sequence from 1 to <seq>")
  //main use: hash each argument
  .arguments('[data...] ')
  .action(function (data) {
    if (data ) {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i], '\t', hash(data[i]))
      }
    } 
  })
  .parse(process.argv)
 
function hash(chaine){
 return crypto.createHash('sha256').update(chaine).digest('hex')
}

if(program.sequence){
  console.log("Sequence!")
 for (var i = 1; i <= program.sequence; i++) {
   console.log(i, hash(String(i)))
 }
}

