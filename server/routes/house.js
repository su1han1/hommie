var express = require("express"),
    router = express.Router(),
    House = require('../models/house'),
    utils = require('../utils')

let { responseClient } = utils

router.get('/', (req, res) => {
    let { pageNum, minBed, maxBed, minBath, maxBath, minPrice, maxPrice } = req.query
    House.find(
        {
            totalRoom: { $gte: minBed, $lte: maxBed},
            totalBath: { $gte: minBath, $lte: maxBath },
            price: { $gte: minPrice, $lte: maxPrice },
        }
    ).limit(12).skip(parseInt(pageNum)).sort({changeDate: -1})
        .then(data => {
            responseClient(res, 200, 0, '', data)
        })
        .catch((err) => {
            console.log(err)
            responseClient(res, 500, 3, 'Server Error')
        })
})

router.get('/detail', (req, res) => {
    let { id } = req.query
    House.findById(id)
        .then(data => {
            if (!data) responseClient(res, 400, 2, 'Post Not Found')
            responseClient(res, 200, 0, '', data)
        })
        .catch((err) => {
            console.log(err)
            responseClient(res, 400, 3, 'Server Error')
        })
})

module.exports = router