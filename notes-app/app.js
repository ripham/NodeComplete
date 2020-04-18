const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Fran')

fs.appendFileSync('notes.txt', '\nFollowing a Node course')