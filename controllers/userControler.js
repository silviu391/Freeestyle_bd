const User = require('../models/user');
const userService = require('../services/userService');
const { credentialsVerify, credentialsGenerate } = require('../services/authToken');
const { checkUserCredentials, createUser, checkIfUserExists } = require('../services/userService');


module.exports.login = async (req, res) => {
    let username = req.body.username || '';
    let password = req.body.password || '';
    let email = req.body.email || '';

    if (await checkUserCredentials(username, password, email)) {
        res.json(credentialsGenerate(username));
    }
    else {
        return res.status(400).send({
            message: 'Invalid credentials'
        });
    }
}


module.exports.register = async (req, res) => {
    let username = req.body.username || '';
    let password = req.body.password || '';
    let email = req.body.email || '';

    if (await checkIfUserExists(username, email)) {
        res.status(400).send({
            message: 'User already registered'
        });
    } else {
        await createUser(username, email, password)
        res.status(201).send({
            message: 'You have created your account'
        });
    }

}


