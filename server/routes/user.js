var express = require("express"),
    router = express.Router(),
    utils = require('../utils'),
    User = require('../models/user')

const { responseClient, md5, MD5_SUFFIX } = utils

router.post('/signup', (req, res) => {
    let { newUser } = req.body
    if (!newUser.email) {
        responseClient(res, 400, 2, 'Please enter your email')
        return
    }
    if (!newUser.password) {
        responseClient(res, 400, 2, 'Please enter your password')
        return
    }
    User.findOne({email: newUser.email})
        .then(data => {
            if (data) {
                responseClient(res, 200, 1, "You've already signed up.")
                return
            }
            let user = new User({})
            delete newUser._id
            for (let i in newUser) {
                if (i === 'password') user[i] = md5(newUser[i] + MD5_SUFFIX)
                else user[i] = newUser[i]
            }
            console.log(user)
            user.save()
                .then(() => {
                    User.findOne({ email: user.email })
                        .then(data => {
                            // set session after signup
                            req.session.userInfo = data
                            responseClient(res, 200, 0, "You've successfully signed up!", data)
                            return
                        })
                })
                .catch(err => {
                    console.log(err)
                    responseClient(res, 500, 3, 'Server Error')
                })
        })
        .catch(err => {
            console.log(err)
            responseClient(res, 500, 3, 'Server Error')
            return
        })
})

router.post('/signin', (req, res) => {
    let { email, password } = req.body
    console.log(req.body)
    if (email==='') {
        responseClient(res, 400, 2, 'Please enter your email')
        return
    }
    if (!password) {
        responseClient(res, 400, 2, 'Please enter your password')
        return
    }
    User.findOne({
        email,
        password: md5(password + MD5_SUFFIX)
    }).then(data => {
        if (data) {
            // set session after login
            req.session.userInfo = data
            responseClient(res, 200, 0, 'You\'ve successfully signed in!', data)
            return
        }
        responseClient(res, 400, 1, 'The email or password doesn\'t match records')
    }).catch(err => {
        console.log(err)
        responseClient(res, 500, 3, 'Server Error')
    })
})

// validate if user signed in
router.get('/signin', (req, res) => {
    if (req.session.userInfo) responseClient(res, 200, 0, "", req.session.userInfo)
    else responseClient(res, 200, 2, 'Please sign in again')
})

router.get('/signout', (req, res) => {
    req.session.destroy()
    responseClient(res, 200, 0, 'You\'ve signed out.')
})

module.exports = router