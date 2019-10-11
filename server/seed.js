var House = require('./models/house'),
User = require('./models/user')

const seed = () => {
    console.log('seeding...')
    User.findOne({ email: '11@11.com' }).then(user => {
        House.deleteMany({}).catch((err) => { console.log(err) })
        for (let i in data) {
            data[i].userID = user._id
            data[i].createDate = new Date()
            data[i].changeDate = new Date()
            House.create(data[i]).catch((err) => { console.log(err) })
        }
    })
}

module.exports = seed

const data = [
    {
        title: 'Treeland Apartment: 2B2B Unit Male',
        images: [
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png"
        ],
        isSublease: 1,
        totalRoom: 2,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 1,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'Far West',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 900,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Elan Park Apartments - 4 Bathrooms & 4 bedrooms',
        images: [
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png"
        ],
        isSublease: 0,
        totalRoom: 4,
        totalBath: 4,
        leaseRoom: 2,
        occuRoom: 2,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'hyde park',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 920,
        utilityIncluded: false,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: '[New] Univ Student Apartment:  1 year',
        images: [
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/1.png",
            "/house-img/7.png"
        ],
        isSublease: 1,
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'west campus',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 1150,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'HEB Town Housing, 1 academic year',
        images: [
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png"
        ],
        isSublease: 1,
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'riverside',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 980,
        utilityIncluded: false,
        isNegotiatable: false,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Graduate Student Housing: Central',
        images: [
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png"
        ],
        isSublease: 0,
        totalRoom: 2,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 1,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'far west',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 700,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Park Village Living House - Smoking allowed',
        images: [
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png"
        ],
        isSublease: 1,
        totalRoom: 3,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 2,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'hyde park',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 960,
        utilityIncluded: false,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Treeland Apartment: 2B2B Unit Male',
        images: [
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png"
        ],
        isSublease: 1,
        totalRoom: 2,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 1,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'Far West',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 900,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Elan Park Apartments - 4 Bathrooms & 4 bedrooms',
        images: [
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png"
        ],
        isSublease: 0,
        totalRoom: 4,
        totalBath: 4,
        leaseRoom: 2,
        occuRoom: 2,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'hyde park',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 920,
        utilityIncluded: false,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: '[New] Univ Student Apartment:  1 year',
        images: [
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/1.png",
            "/house-img/7.png"
        ],
        isSublease: 1,
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'west campus',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 1150,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'HEB Town Housing, 1 academic year',
        images: [
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png"
        ],
        isSublease: 1,
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'riverside',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 980,
        utilityIncluded: false,
        isNegotiatable: false,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Graduate Student Housing: Central',
        images: [
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png"
        ],
        isSublease: 0,
        totalRoom: 2,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 1,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'far west',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 700,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Park Village Living House - Smoking allowed',
        images: [
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png"
        ],
        isSublease: 1,
        totalRoom: 3,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 2,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'hyde park',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 960,
        utilityIncluded: false,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },   
    {
        title: 'Treeland Apartment: 2B2B Unit Male',
        images: [
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png"
        ],
        isSublease: 1,
        totalRoom: 2,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 1,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'Far West',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 900,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Elan Park Apartments - 4 Bathrooms & 4 bedrooms',
        images: [
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png"
        ],
        isSublease: 0,
        totalRoom: 4,
        totalBath: 4,
        leaseRoom: 2,
        occuRoom: 2,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'hyde park',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 920,
        utilityIncluded: false,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: '[New] Univ Student Apartment:  1 year',
        images: [
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/1.png",
            "/house-img/7.png"
        ],
        isSublease: 1,
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'west campus',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 1150,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'HEB Town Housing, 1 academic year',
        images: [
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png"
        ],
        isSublease: 1,
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'riverside',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 980,
        utilityIncluded: false,
        isNegotiatable: false,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Graduate Student Housing: Central',
        images: [
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png"
        ],
        isSublease: 0,
        totalRoom: 2,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 1,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'far west',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 700,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Park Village Living House - Smoking allowed',
        images: [
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png"
        ],
        isSublease: 1,
        totalRoom: 3,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 2,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'hyde park',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 960,
        utilityIncluded: false,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Treeland Apartment: 2B2B Unit Male',
        images: [
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png"
        ],
        isSublease: 1,
        totalRoom: 2,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 1,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'Far West',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 900,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Elan Park Apartments - 4 Bathrooms & 4 bedrooms',
        images: [
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png"
        ],
        isSublease: 0,
        totalRoom: 4,
        totalBath: 4,
        leaseRoom: 2,
        occuRoom: 2,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'hyde park',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 920,
        utilityIncluded: false,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: '[New] Univ Student Apartment:  1 year',
        images: [
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/1.png",
            "/house-img/7.png"
        ],
        isSublease: 1,
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'west campus',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 1150,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'HEB Town Housing, 1 academic year',
        images: [
            "/house-img/3.png",
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png"
        ],
        isSublease: 1,
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'riverside',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 980,
        utilityIncluded: false,
        isNegotiatable: false,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Graduate Student Housing: Central',
        images: [
            "/house-img/4.png",
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png"
        ],
        isSublease: 0,
        totalRoom: 2,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 1,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'far west',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 700,
        utilityIncluded: true,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    },
    {
        title: 'Park Village Living House - Smoking allowed',
        images: [
            "/house-img/5.png",
            "/house-img/7.png",
            "/house-img/1.png",
            "/house-img/2.png",
            "/house-img/3.png",
            "/house-img/4.png"
        ],
        isSublease: 1,
        totalRoom: 3,
        totalBath: 2,
        leaseRoom: 1,
        occuRoom: 2,
        leaseStart: new Date('Sep 14, 2019'),
        leaseEnd: new Date('Sep 14, 2020'),
        region: 'hyde park',
        address: '1054 Guad Martin Street, Apt 431, Austin, TX',
        price: 960,
        utilityIncluded: false,
        isNegotiatable: true,
        floorPlan: [
            "Living room",
            "Kitchen"
        ],
        amenities: [
            "Free wifi",
            "In-house laundry",
            "Free gym",
            "Swimming pool",
            "Room delivery",
            "Smoking allowed"
        ],
        facilities: [
            "School shuttle",
            "Convenience store"
        ],
        description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
    }
]

const temp = {
    title: '',
    images: [
        "/house-img/7.png",
        "/house-img/1.png",
        "/house-img/2.png",
        "/house-img/3.png",
        "/house-img/4.png",
        "/house-img/5.png"
    ],
    isSublease: 1,
    totalRoom: 2,
    totalBath: 2,
    leaseRoom: 1,
    occuRoom: 1,
    leaseStart: new Date('Sep 14, 2019'),
    leaseEnd: new Date('Sep 14, 2020'),
    region: '',
    address: '1054 Guad Martin Street, Apt 431, Austin, TX',
    price: 0,
    utilityIncluded: true,
    isNegotiatable: true,
    floorPlan: [
        "Living room",
        "Kitchen"
    ],
    amenities: [
        "Free wifi",
        "In-house laundry",
        "Free gym",
        "Swimming pool",
        "Room delivery",
        "Smoking allowed"
    ],
    facilities: [
        "School shuttle",
        "Convenience store"
    ],
    description: 'Treeland Apartment is located at the center of Far West, and majority of the residents here are students from UT Austin. You can be part of the student community here! The neighborhood is very clean and quiet.',
}