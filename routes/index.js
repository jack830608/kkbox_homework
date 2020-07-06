const axios = require('axios');

module.exports = function (server, handle, app) {

    server.get('*', (req, res) => {
        return handle(req, res);
    })
}