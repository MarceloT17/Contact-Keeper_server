const express = require('express')
const router = express.Router()

//submit something to the db, post data to the db
//@route    POST api/users
//@desc register a user
//@access   public
router.post('/', (req, res) => {
    res.send('register a user')
})

module.exports = router