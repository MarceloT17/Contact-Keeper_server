const express = require('express')
const router = express.Router()

//@route    GET api/auth
//@desc get logged in user
//@access   private
router.get('/', (req, res) => {
    res.send('get logged in user')
})

//mesmo url mas diferente métodos como post e get, tudo bem estar na mesma url
//@route    POST api/auth
//@desc     auth user and get token
//@access   public
router.post('/', (req, res) => {
    res.send('log in user')
})

module.exports = router