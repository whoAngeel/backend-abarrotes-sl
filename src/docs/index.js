const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const auth = require('./auth');
const users = require('./users');


module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    paths: {
        '/auth/login': {
            ...require('./auth/login')
        },
        '/users': {
            ...require('./users/getUsers')
        },
        '/users/{userId}': {
            ...require('./users/usersId')
        },
        '/employees/': {
            ...require('./employees/employees')
        },
        '/employees/{employeeId}/': {
            ...require('./employees/employeesWid')
        }

    }

    // ...auth,
    // ...users,
}
