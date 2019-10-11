/**
 * response code
 *
 * 0：success
 * 1：illegal data
 * 2：client error
 * 3：server error
 */

var crypto = require('crypto')

module.exports = {
    MD5_SUFFIX: 'svndgea3e4t4958uy49ngxx&**',
    md5: (pwd) => {
        let md5 = crypto.createHash('md5')
        return md5.update(pwd).digest('hex')
    },
    responseClient(res, httpCode = 500, code = 3, message = 'Server Error', data = {}) {
        let responseData = {};
        responseData.code = code;
        responseData.message = message;
        responseData.data = data;
        res.status(httpCode).json(responseData)
    }
}