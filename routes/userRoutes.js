const router = require ('express').Router();
const userControler = require ('../controllers/userControler');

router.route ('/login').post(userControler.login);
router.route ('/register').post(userControler.register);

module.exports = router;