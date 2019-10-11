var express = require("express"),
    router = express.Router(),
    House = require('../models/house'),
    User = require('../models/user'),
    utils = require('../utils')

let { responseClient } = utils

router.get('/house', (req, res) => {
    let { pageNum, userID } = req.query
    House.find({userID: userID}).limit(5).skip((pageNum - 1) * 5)
        .then(data => {
            responseClient(res, 200, 0, '', data)
        })
        .catch((err) => {
            console.log(err)
            responseClient(res, 500, 3, 'Server Error')
        })
})

router.post('/house', (req, res) => {
    let { newHouse } = req.body
    delete newHouse._id
    let house = new House({})
    if (req.session.userInfo) {
        User.findById(req.session.userInfo._id)
            .then(user => {
                for (let i in newHouse) {
                    if (i === 'userID') house[i] = user._id
                    else house[i] = newHouse[i]
                }
                house.save().then(data => {
                    console.log(data)
                    responseClient(res, 200, 0, 'House published!', data)
                }).catch((err) => {
                    console.log(err)
                    responseClient(res, 500, 3, 'Server Error')
                })
            }).catch((err) => {
                console.log(err)
                responseClient(res, 500, 3, 'Server Error')
            })
    } else responseClient(res, 200, 2, 'Please sign in', req.session.userInfo)   
})

router.put('/house', (req, res) => {
    let { updatedHouse } = req.body
    let id = updatedHouse._id
    delete updatedHouse._id
    delete updatedHouse.userID
    updatedHouse.changeDate = new Date()
    if (req.session.userInfo) {
        House.findByIdAndUpdate(id, updatedHouse)
            .then(data => {
                responseClient(res, 200, 0, 'House updated!', data)
            }).catch((err) => {
                console.log(err)
                responseClient(res, 500, 3, 'Server Error')
            })
    } else responseClient(res, 200, 2, 'Please sign in')
})

router.delete('/house', (req, res) => {
    let { houseID } = req.query
    console.log(houseID)
    if (req.session.userInfo) {
        House.findByIdAndDelete(houseID).then((data) => {
            console.log(data)
            responseClient(res, 200, 0, 'House deleted!')
        }).catch((err) => {
            console.log(err)
            responseClient(res, 500, 3, 'Server Error')
        })
    } else responseClient(res, 200, 2, 'Please sign in')
})

module.exports = router