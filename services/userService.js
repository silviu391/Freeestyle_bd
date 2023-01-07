const User = require('../models/user');


module.exports.checkUserCredentials = (username, password, email) => {
    let credentials = User.findOne({
        $or: [
            { username: username },
            { email: email }
        ]});
    if (credentials == null ){
        return false;
    }
    if(credentials.password != password){
        return false;
    }
    return true;
}