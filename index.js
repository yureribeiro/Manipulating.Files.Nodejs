//biblioteca moment nativo do nodejs
const moment = require('moment')

function myName (name) {
  console.log(name)
  console.log(moment().format('HH:mm:ss'))
}

myName('Yure Ribeiro')