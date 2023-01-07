const User = require('../models/user');
const userService = require('../services/userService');


module.exports.login = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let user1 = await User.findOne({ username: "mircea" })
    console.log(user1)
    console.log(username);
}


module.exports.register = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    if (userService.checkUserCredentials(username, password, email) != true) {
        console.log("Incorrect credentials")
        return res.status(400).send({
            message: "Error"
        });
    }
    console.log(firstUser);

    res.send(firstUser);

}

