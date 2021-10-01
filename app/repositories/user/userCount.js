const Model = require('../../models/user'),
    count_user_overall = require('../../lib/countuseroverall'),
    ObjectId = require('mongoose').Types.ObjectId

module.exports = (params) => {
    // return new Promise((resolve, reject) => {
    //     console.log("paramsrepo", params);
    //     Model.aggrigate([
    //         {
    //             "$project": {
    //                 "_id": {
    //                     "$toObjectId": "$_id"
    //                 }
    //             }
    //         },
    //         {
    //             // $lookup: {
    //             //     from: 'tasks',
    //             //     as: 'tasks',
    //             //     let: { userId: $_id },
    //             //     pipeline: [
    //             //         { $match: { $expr: ['$userId', '$$userId'] } }
    //             //     ]

    //             // }
    //             $lookup: {
    //                 from: 'tasks',
    //                 localField: '_id',
    //                 foreignField: 'userId',
    //                 as: 'tasks'
    //                 // pipeline: [
    //                 //     { $match: { $expr: ['$userId', '$$userId'] } }
    //                 // ]

    //             }
    //             // },
    //             // {
    //             //     $match: { managerId: `${params.managerId}` }
    //         }
    //     ]).then((result) => {

    //         if (dataVehicles !== null) {
    //             records = records.map(item => count_user_overall(item))
    //             return resolve(records)
    //         } else {
    //             return reject("data not found");
    //         }

    //     }).catch((err) = {
    //         reject(err)
    //     });
    // });

    return new Promise((resolve, reject) => {
        Model.aggregate([
            {
                $lookup: {
                    from: 'tasks',
                    foreignField: 'userId',
                    localField: '_id',
                    as: 'tasks'
                }
            },
            {
                $match: {
                    "managerId": ObjectId(params.managerId)
                }
            }

            //     // $match: { managerId: `${params.managerId}` }
            // }
        ]).exec((err, records) => {
            // console.log("err", err);
            if (err)
                // throw new Error(err)
                return reject({ code: 504, message: err.message })
            // console.log("records", records);
           let modifyrecords = records.map(item => count_user_overall(item))
            return resolve(modifyrecords)
            // console.log(records)
        })
    });
}
