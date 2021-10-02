const UserData = require('../model/UserData');
const Purchaised=require('../model/Purchaised')
// var Rented=require('../model/Rented')

const registererUser = (username, email, password, gender) => {

    return UserData.findOne({
        username: username,
        email: email
    })
        .then((user) => {
            if (user) {
                return { message: "user already exists" }
            }
            else {
                const registerUser = new UserData({
                    "username": username,
                    "email": email,
                    "password": password,
                    "gender": gender
                });
                registerUser.save();
                return { message: "user :" + username + " registered sucessfully" }
            }
        });
}

const authUser = (username, password) => {
    return UserData.findOne({
        username: username,
        password: password
    })
}

// const getPurchaised=(id)=>{
//     return UserData.findById(id)
//     .then((user)=>{
//         return user
//     })
// }

const getPurchaised=(id)=>{
    return UserData.findById(id)
    .then((user)=>{
        return user
    })
}

const getRented=(id)=>{
    return UserData.findById(id)
    .then((user)=>{
        return user
    })
}

const purchaised = (data, id) => {
    // console.log(data)
    return UserData.findById( id )
        .then((user) => {
            // console.log(user)
            user.purchaisedItems.push(data)
            user.save();
            return { message: "item purchaised successfully", user }
        })
}

// const purchaised =  (data, _id) => {
//     // console.log(data)
//     // const {id,original_title,overview,poster_path,release_date,Status,title,vote_average,rentTime}=data;
//     return  UserData.findById( _id )
//         .then(async (user) => {
//           const purchaisedItems=await Purchaised.create(data)
//             // purchaisedItems.save();
//             // console.log(purchaisedItems)
//             // user.purchaisedItems.push(data)
//             // user.save();
//             return { message: "item purchaised successfully", purchaisedItems }
//         })
// }

const rented = (data, id) => {
    // console.log(data)
    return UserData.findById( id )
        .then((user) => {
            // console.log(user)
            user.rentedItems.push(data)
            user.save();
            return { message: "item rented sucessfully", user }
        })
}

const deleteitem=(itemId,id)=>{
    // return UserData.find({id}).findOneAndRemove({itemId})
    // .then((res)=>{
    //     return res
    // })
    // return UserData.findOne({purchaisedItems:itemId})
    // .then((res)=>{
    //     return res
    // })
}

module.exports = {
    registererUser,
    authUser,
    purchaised,
    rented,
    getPurchaised,
    getRented,
    deleteitem
}