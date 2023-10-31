const getUsers = require('./getUsers');
module.exports = {
    paths: {
        '/users': {
            ...getUsers
        }
    }
}
