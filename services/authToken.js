const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');



module.exports.credentialsGenerate = (username) => {
    let key = jwt.sign(
        { username: username },
        Buffer.from(secretKey, "base64"));
    return key;
};
module.exports.credentialsVerify = async (key) => {
    try {
        let username = await new Promise((resolve, reject) => {
            if (!key) {
                reject('Empty acces token');
                return;
            }
            jwt.verify(key, Buffer.from(secretKey, 'base64'), (err, user) => {
                if (err) {
                    console.log(err);
                    reject('TokenExpiredError');
                } else
                    resolve(user);
            });
        });
    } catch (e) {
        return null;
    }
    console.log(username);
    return username;

};


