const fs = require('fs')


function userProfiles(){
    // database request
    let users =   fs.readFileSync('users.json');
    users = (JSON.parse(users))
    return users
}

exports.users = userProfiles;