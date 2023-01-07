const User = require('../models/user');


module.exports.checkUserCredentials = async (username, password, email) => {
    let credentials = await User.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    });
    console.log(credentials)
    if (credentials == null) {
        return false;
    }
    if (credentials.password != password) {
        return false;
    }
    return true;
}

module.exports.createUser = async (username, password, email) => {
    let newUser = User({
        username:username,
        password:password,
        email:email
    });
    await newUser.save();
}

module.exports.checkIfUserExists = async (username, email) => {
    let userInfo = await User.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    });
    console.log(userInfo)
    if (userInfo == null) {
        return false;
    }
    else {
        return true;
    }
}
