var mongoose = require('mongoose')

var houseSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createDate: Date,
    changeDate: Date,
    images: Array,
    title: String,
    description: String,
    isSublease: Number,
    leaseStart: Date,
    leaseEnd: Date,
    region: String,
    address: String,
    totalRoom: Number,
    totalBath: Number,
    leaseRoom: Number,
    occuRoom: Number,
    price: Number,
    utilityIncluded: Boolean,
    isNegotiatable: Boolean,
    floorPlan: Array,
    amenities: Array,
    facilities: Array,
})

module.exports = mongoose.model('house', houseSchema)