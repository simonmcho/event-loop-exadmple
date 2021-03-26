const crypto = require('crypto')

const initStart = Date.now()

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('#1 pbkdf2 call: ', Date.now() - initStart)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('#2 pbkdf2 call: ', Date.now() - initStart)
})